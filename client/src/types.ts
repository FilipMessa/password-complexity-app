export type Score = 0 | 1 | 2 | 3 | 4;
export type StrengthType = 'Bad' | 'Weak' | 'Good' | 'Strong';

export type PasswordScore = {
  score?: Score;
  strength?: StrengthType;
  statusCode?: number;
};
