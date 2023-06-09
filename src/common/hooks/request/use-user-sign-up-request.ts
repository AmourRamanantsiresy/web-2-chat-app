import { authProvider } from '@/providers';
import useSwrMutation from 'swr/mutation';
import { SignUpFormType } from '../form/resolver';

async function signUp(url: string, { arg }: { arg: SignUpFormType }) {
  return await authProvider.signUp(arg);
}

export const useSignUpRequest = () => {
  const { isMutating, trigger, ...others } = useSwrMutation('/signUp', signUp);

  return {
    isLoading: isMutating,
    signUp: trigger,
    ...others,
  };
};
