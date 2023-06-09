import { User } from '@/types';
import { publicRequest } from './request';
import { cookies } from '@/common/utils';
import { LoginFormType, SignUpFormType } from '@/common/hooks/form/resolver';

export const authProvider = {
  signUp: async (user: SignUpFormType) => {
    const {
      data: { user: createdUser },
    } = await publicRequest().post('/users', user);

    cookies.setAccessToken(createdUser.token);
    cookies.setUser(createdUser);

    return createdUser as User;
  },
  signIn: async (credentials: LoginFormType) => {
    const {
      data: { user },
    } = await publicRequest().post('/users/login', credentials);
    cookies.setAccessToken(user.token);
    cookies.setUser(user);
    return user as User;
  },
  logout: () => cookies.delete(),
};
