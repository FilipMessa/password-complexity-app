import React from 'react';
import styled from 'styled-components';
import { InputField, Badge, Title, DoomFace } from './components';
import { Score, StrengthType } from './types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 85px;
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
      <Wrapper>{typeof faceType === 'number' && !isError && <DoomFace type={faceType} />}</Wrapper>
      {strength && !isError && <Badge label={strength} />}
    </Layout>
  );
};

export default App;
