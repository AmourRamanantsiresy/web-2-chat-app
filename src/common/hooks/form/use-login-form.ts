import { useForm } from 'react-hook-form';
import { LoginFormType, loginResolver } from './resolver';
import { useLoginRequest } from '../request';
import { useRequestErrorHandler } from '../use-request-handler';
import { useRouter } from 'next/router';

export const useLoginForm = () => {
  const hookForm = useForm<LoginFormType>({
    mode: 'all',
    resolver: loginResolver,
    defaultValues: { email: '', password: '' },
  });
  const errorHandler = useRequestErrorHandler();
  const router = useRouter();

  const request = useLoginRequest();

  const handleSubmit = hookForm.handleSubmit(data => {
    request
      .login(data)
      .then(() => router.push('/profile'))
      .catch(errorHandler);
  });

  return { hookForm, request, handleSubmit, router };
};
