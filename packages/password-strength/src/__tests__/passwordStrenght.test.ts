import passwordStrength from '../../index';

describe('passwordStrength function', () => {
  it('should return 0 (no password)', () => {
    const result = passwordStrength('');
    expect(result).toBe(0);
  });
  it('should return 0', () => {
    const result = passwordStrength('123567');
    expect(result).toBe(0);
  });
  it('should return 1', () => {
    const result = passwordStrength('a13567');
    expect(result).toBe(1);
  });
  it('should return 2', () => {
    const result = passwordStrength('a@167a');
    expect(result).toBe(2);
  });
  it('should return 3', () => {
    const result = passwordStrength('a@167aaq');
    expect(result).toBe(3);
  });
  it('should return 4', () => {
    const result = passwordStrength('a@167aa@Assq');
    expect(result).toBe(4);
  });
  it('should be able work with custom validator function', () => {
    const validator = (password: string) => password.includes('start trek');
    const result1 = passwordStrength('start trek', { startTrek: validator });
    expect(result1).toBe(2);

    const result2 = passwordStrength('star wars', { startTrek: validator });
    expect(result2).toBe(1);
  });
});
