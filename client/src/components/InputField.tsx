import React from 'react';
import styled from 'styled-components';
import border from '../assets/border.svg';
import redBorder from '../assets/border-red.svg';

interface InputStyledProps {
  isError?: boolean;
}

const InputStyled = styled.input<InputStyledProps>`
  display: block;
  border-image-slice: 2;
  border-image-width: 2;
  border-width: 4px;
  border-image-source: url(${({ isError }) => (isError ? redBorder : border)});
  border-image-outset: 2;
  padding: 0.5rem 1rem;
  margin: 4px;
  background-clip: padding-box;
  font-size: inherit;
  line-height: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: #881400;
  margin: 0.5rem 0;
`;

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, errorMessage }) => (
  <Wrapper>
    <InputStyled
      data-testid="input-field"
      isError={Boolean(errorMessage)}
      type="text"
      value={value}
      onChange={onChange}
    />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);
