import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { User } from '../types';

type CookiesList = 'access-token' | 'user';

export const userItem = 'chat-user';
export const accessTokenItem = 'access-token-item';

const setUser = (user: User) => setCookie(userItem, user);
const setAccessToken = (aT: string) => setCookie(accessTokenItem, aT);

const getUser = (cookies?: any) => (cookies ? cookies[userItem] : getCookie(userItem));
const getAccessToken = (cookies?: any) => (cookies ? cookies[accessTokenItem] : getCookie(accessTokenItem));

const deleteUser = () => deleteCookie(userItem);
const deleteAccessToken = () => deleteCookie(accessTokenItem);

export const cookies = {
  setUser,
  setAccessToken,
  getUser,
  getAccessToken,
  deleteUser,
  deleteAccessToken,
  delete: () => {
    deleteUser();
    deleteAccessToken();
  },
};
