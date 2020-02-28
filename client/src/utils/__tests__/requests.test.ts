import axios from 'axios';
import { fetchPasswordScore, API } from '../requests';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchPasswordScore', () => {
  it('the POST request on API version 1 should be sent', async () => {
    const password = 'ABCD!';
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        score: 1,
        strength: 'Bad',
        statusCode: 200,
      },
    });

    await fetchPasswordScore(password);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3005/password-complexity/v1', {
      password: password,
    });
  });

  it('the POST request on API version 2 should be sent', async () => {
    const password = 'XZCE!';
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        score: 1,
        strength: 'Bad',
        statusCode: 200,
      },
    });

    await fetchPasswordScore(password, API.VERSION_2);
    expect(mockedAxios.post).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3005/password-complexity/v2', {
      password: password,
    });
  });
});
