import { User } from '../types';

const userItem = 'chat-user';
const accessTokenItem = 'access-token-item';

const getJson = <T>(key: string) => {
  const value: T = JSON.parse(window.localStorage.getItem(key) as string);
  return value;
};

const getString = (key: string) => window.localStorage.getItem(key);
const setString = (key: string, value: string) => window.localStorage.setItem(key, value);

const cacheJson = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const getCached = {
  user: () => getJson<User>(userItem),
  accessToken: () => getString(accessTokenItem),
};
export const cache = {
  user: (user: User) => cacheJson(userItem, user),
  accessToken: (accessToken = '') => setString(accessTokenItem, accessToken),
};

export const clearCache = () => {
  window.localStorage.clear();
};
