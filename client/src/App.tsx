import React, { Component, useEffect, useState, useCallback } from 'react';
import { hot } from 'react-hot-loader';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import { getPasswordScore } from './utils/requests'; // todo rename this

const Text = styled.span`
  color: blue;
`;

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState();
  //const [passwordScore, setPasswordScore] = useState(null);

  const resetScore = useCallback(() => setScore(null), []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPasswordScore(password);
      setScore(result);
    };
    if (!password) {
      resetScore();
    } else {
      fetchData();
    }

    console.log(password);
  }, [password]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <input value={password} onChange={handleChange} />
      <Text>{password}</Text>
      <span>{JSON.stringify(score, null, 1)}</span>
    </ThemeProvider>
  );
};

export default hot(module)(App);
