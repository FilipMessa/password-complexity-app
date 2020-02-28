const API_URL = 'http://localhost:3005'; // TODO from env.
import axios from 'axios';
import { PasswordScore as Response } from '../types';

export enum API {
  VERSION_1 = 'v1',
  VERSION_2 = 'v2',
}

export const fetchPasswordScore = async (password: string, version: API = API.VERSION_1) => {
  const { data } = await axios.post<Response>(`${API_URL}/password-complexity/${version}`, {
    password,
  });
  return data;
};
