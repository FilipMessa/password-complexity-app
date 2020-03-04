import styled from 'styled-components';
import React from 'react';
import { Badge, DoomFace } from './';
import { Score, StrengthType } from '../types';

const Wrapper = styled.div`
  margin-top: 85px;
`;

interface PasswordIndicatorProps {
  faceType?: Score;
  strength?: StrengthType;
}

export const PasswordIndicator: React.FC<PasswordIndicatorProps> = ({ faceType, strength }) => (
  <div data-testid="password-indicator">
    <Wrapper>{typeof faceType === 'number' && <DoomFace type={faceType} />}</Wrapper>
    {strength && <Badge dataTestId="password-strength-text" label={strength} />}
  </div>
);
