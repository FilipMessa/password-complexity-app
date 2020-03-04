const API_URL = 'http://localhost:3005'; // TODO from env.
import axios from 'axios';
import { PasswordScore as Response } from '../types';

export enum API {
  VERSION_1 = 'v1',
  VERSION_2 = 'v2',
}

const CancelToken = axios.CancelToken;
let cancel: Function | undefined;

export const fetchPasswordScore = async (password: string, version: API = API.VERSION_1) => {
  if (cancel) {
    cancel();
  }
  try {
    const { data } = await axios.post<Response>(
      `${API_URL}/password-complexity/${version}`,
      {
        password,
      },
      {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
      },
    );
    return data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('post request canceled');
    } else {
      throw err;
    }
  }
};
