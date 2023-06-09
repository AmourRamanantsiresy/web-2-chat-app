import axios from 'axios';
import { BASE_URL } from './base';

export const privateRequest = (accessToken: string) => {
  if (!accessToken) {
    throw new Error('User is no logged');
  }
  return axios.create({
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
    baseURL: BASE_URL,
  });
};

export const publicRequest = () => {
  return axios.create({ baseURL: BASE_URL });
};
