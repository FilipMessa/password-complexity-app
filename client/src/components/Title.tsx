import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => <h1>{children}</h1>;
