const API_URL = 'http://localhost:3005'; // TODO from env.

export const getPasswordScore = async (password: string, version: 'v1' | 'v2' = 'v1') => {
  const res = await fetch(`${API_URL}/password-complexity/${version}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });
  return res.json();
};
