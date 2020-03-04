import React from 'react';
import styled from 'styled-components';
import { InputField, Title, PasswordIndicator } from './components';
import { Score, StrengthType } from './types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface AppProps {
  title: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  faceType?: Score;
  isError?: boolean;
  strength?: StrengthType;
}

const App: React.FC<AppProps> = ({ title, password, onChange, faceType, isError, strength }) => {
  const errorMessage = isError ? 'Ups! Something went wrong :(' : '';
  return (
    <Layout>
      <Title>{title}</Title>
      <InputField value={password} onChange={onChange} errorMessage={errorMessage} />
      {!isError && <PasswordIndicator faceType={faceType} strength={strength} />}
    </Layout>
  );
};

export default App;
