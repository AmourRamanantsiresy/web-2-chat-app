import { CreateUser, CreatedUser, DomainUser, RestUser, User } from '@/common/types';
import { publicRequest } from './request';
import { LoginUser } from '@/common/types';
import { cookies } from '@/common/utils';

export const authProvider = {
  signUp: async (user: CreateUser) => {
    const createdUser: CreatedUser = (await publicRequest().post('/users', user)).data;
    cookies.setAccessToken(createdUser.user.token || '');
    return { redirection: '/profile', data: createdUser.user, authenticate: true };
  },
  signIn: async (user: LoginUser) => {
    const restUser: RestUser = (await publicRequest().post('/users/login', user)).data.user;
    cookies.setAccessToken(restUser.token || '');
    return { redirection: '/profile', data: restUser as DomainUser, authenticate: true };
  },
  logout: () => {
    cookies.delete();
    return { redirection: `/login`, data: null, authenticate: false };
  },
};
