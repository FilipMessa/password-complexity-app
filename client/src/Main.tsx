import React, { useEffect, useState } from 'react';
import App from './App';
import { GlobalStyles, Checkbox } from './components';
import { PasswordScore } from './types';
import { fetchPasswordScore, API } from './utils/requests';
import { useDebounce } from './utils/useDebounce';
import { AxiosError } from 'axios';

const DEBOUNCE_TIME = 500;

function isNetworkError(err: AxiosError) {
  return !!err.isAxiosError && !err.response;
}

const Main: React.FC = () => {
  const [apiVersion, setApiVersion] = useState<API>(API.VERSION_1);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordScore, setPasswordScore] = useState<PasswordScore | null>();

  const debouncedPassword = useDebounce(password, DEBOUNCE_TIME);

  useEffect(() => {
    const fetchData = async () => {
      try {
        error && setError('');
        const result = await fetchPasswordScore(debouncedPassword, apiVersion);
        setPasswordScore(result);
      } catch (err) {
        const errorMessage = isNetworkError(err)
          ? 'Server Not Responding'
          : 'Ups! Something went wrong :(';

        setPasswordScore(null);
        setError(errorMessage);
      }
    };

    if (!debouncedPassword) {
      setPasswordScore(null);
    } else {
      fetchData();
    }
  }, [debouncedPassword, apiVersion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleApiChange = () => {
    if (apiVersion === API.VERSION_1) {
      setApiVersion(API.VERSION_2);
    } else {
      setApiVersion(API.VERSION_1);
    }
  };

  return (
    <>
      <Checkbox label="API v2" checked={apiVersion === API.VERSION_2} onChange={handleApiChange} />
      <App
        error={error}
        title="Password Complexity"
        onChange={handleChange}
        password={password}
        faceType={passwordScore?.score}
        strength={passwordScore?.strength}
      />
      <GlobalStyles />
    </>
  );
};

export default Main;
