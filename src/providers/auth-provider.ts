import { CreateUser, CreatedUser, DomainUser, RestUser, User } from '@/common/types';
import { publicRequest } from './request';
import { LoginUser } from '@/common/types';
import { cache, clearCache } from '@/common/utils';

export const authProvider = {
  signUp: async (user: CreateUser) => {
    try {
      const createdUser: CreatedUser = (await publicRequest().post('/users', user)).data;
      cache.accessToken(createdUser.user.token);
      return { redirection: '/board', data: createdUser.user, authenticate: true };
    } catch (error) {
      const {
        response: { status, data },
      } = error as any;

      return { redirection: `/error?code=${status}`, data, authenticate: false };
    }
  },
  signIn: async (user: LoginUser) => {
    try {
      const restUser: RestUser = (await publicRequest().post('/users/login', user)).data.user;
      cache.accessToken(restUser.token);
      return { redirection: '/board', data: restUser as DomainUser, authenticate: true };
    } catch (error) {
      const {
        response: { status, data },
      } = error as any;

      return { redirection: `/error?code=${status}`, data, authenticate: false };
    }
  },
  logout: () => {
    clearCache();
    return { redirection: `/login`, data: null, authenticate: false };
  },
};
