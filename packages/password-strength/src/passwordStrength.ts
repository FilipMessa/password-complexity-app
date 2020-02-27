export type Validator = (p: string) => boolean;
export interface Validators {
  [key: string]: Validator;
}

const createRegExValidator = (regex: RegExp) => (password: string) => regex.test(password);

const mergeValidators = (a: Validators, b?: Validators) => ({ ...a, ...(b || {}) });

const internalValidators: Validators = {
  digits: createRegExValidator(/\d/),
  lower: createRegExValidator(/[a-z]/),
  upper: createRegExValidator(/[A-Z]/),
  special: createRegExValidator(/[!@#$%\^&*\+]/),
  length: (password: string) => password.length >= 8,
};

export function passwordStrength(password: string, validators?: Validators) {
  if (!password) return 0;

  let score = 0;
  const allValidators = mergeValidators(internalValidators, validators);

  for (const [, validator] of Object.entries(allValidators)) {
    validator(password) && score++;
  }

  // at least two rules must be met to recive score
  return score - 1;
}
