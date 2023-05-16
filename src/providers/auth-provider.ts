import { CreateUser, DomainUser, RestUser } from '@/common/types';
import { publicRequest } from './request';
import { LoginUser } from '@/common/types';
import { cache, clearCache } from '@/common/utils';

export const authProvider = {
  signUp: async (user: CreateUser) => publicRequest().post('/users', user),
  signIn: async (user: LoginUser) => {
    try {
      const restUser: RestUser = (await publicRequest().post('/users/login', user)).data;
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
