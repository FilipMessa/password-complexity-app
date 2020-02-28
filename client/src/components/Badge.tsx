import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 34px;
  padding: 15px;
  font-weight: bold;
`;

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => <Text>{label}</Text>;
