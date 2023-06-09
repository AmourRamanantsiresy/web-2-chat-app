import { authProvider } from '@/providers';
import useSwrMutation from 'swr/mutation';
import { LoginFormType } from '../form/resolver';

async function login(url: string, { arg }: { arg: LoginFormType }) {
  return await authProvider.signIn(arg);
}

export const useLoginRequest = () => {
  const { isMutating, trigger, ...others } = useSwrMutation('/login', login);

  return {
    isLoading: isMutating,
    login: trigger,
    ...others,
  };
};
