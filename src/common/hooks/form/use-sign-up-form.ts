import { useForm } from 'react-hook-form';
import { SignUpFormType, signUpResolver } from './resolver';
import { useSignUpRequest } from '../request';
import { useRequestErrorHandler } from '../use-request-handler';
import { useRouter } from 'next/router';

export const useSignUpForm = () => {
  const hookForm = useForm<SignUpFormType>({
    mode: 'all',
    resolver: signUpResolver,
    defaultValues: { email: '', password: '', confirmPassword: '', name: '' },
  });
  const errorHandler = useRequestErrorHandler();
  const router = useRouter();

  const request = useSignUpRequest();

  const handleSubmit = hookForm.handleSubmit(data => {
    request
      .signUp(data)
      .then(() => router.push('/profile'))
      .catch(errorHandler);
  });

  return { hookForm, request, handleSubmit, router };
};
