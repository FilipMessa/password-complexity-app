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
  error?: string;
  strength?: StrengthType;
}

const App: React.FC<AppProps> = ({ title, password, onChange, faceType, error, strength }) => {
  return (
    <Layout>
      <Title>{title}</Title>
      <InputField value={password} onChange={onChange} errorMessage={error} />
      <Wrapper>{typeof faceType === 'number' && !error && <DoomFace type={faceType} />}</Wrapper>
      {strength && <Badge label={strength} />}
    </Layout>
  );
};

export default App;
