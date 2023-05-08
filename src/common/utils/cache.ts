import { User } from '../types';

const userItem = 'chat-user';

const getJson = <T>(key: string) => {
  const value: T = JSON.parse(localStorage.getItem(key) as string);
  return value;
};

const cacheJson = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const getCached = {
  user: () => getJson<User>(userItem),
};
export const cache = {
  user: (user: User) => cacheJson(userItem, user),
};
