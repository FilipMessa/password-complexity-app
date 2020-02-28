import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import App from './App';
import { GlobalStyles, Checkbox } from './components';
import { PasswordScore } from './types';
import { fetchPasswordScore, API } from './utils/requests';
import { useDebounce } from './utils/useDebounce';

const Main: React.FC = () => {
  const [apiVersion, setApiVersion] = useState<API>(API.VERSION_1);
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordScore, setPasswordScore] = useState<PasswordScore | null>();

  const resetScore = useCallback(() => setPasswordScore(null), []);

  const debouncedPassword = useDebounce(password, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        isError && setIsError(false);
        const result = await fetchPasswordScore(debouncedPassword, apiVersion);
        setPasswordScore(result);
      } catch (err) {
        setIsError(true);
      }
    };

    if (!debouncedPassword) {
      resetScore();
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
        isError={isError}
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

export default hot(module)(Main);
