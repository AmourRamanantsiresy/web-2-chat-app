import { User } from '@/types';
import { UpdateUserForm, userUpdateResolver } from './resolver';
import { useForm } from 'react-hook-form';
import { useRequestErrorHandler } from '../use-request-handler';
import { useRouter } from 'next/router';
import { useUpdateUserRequest } from '../request';
import { cookies } from '@/common/utils';

export const useUpdateUserForm = (user: User) => {
  const hookForm = useForm<UpdateUserForm>({
    mode: 'all',
    resolver: userUpdateResolver,
    defaultValues: { ...user, bio: user?.bio || '' },
  });
  const errorHandler = useRequestErrorHandler();
  const router = useRouter();

  const request = useUpdateUserRequest();

  const handleSubmit = hookForm.handleSubmit(data => {
    request
      .updateUser(data)
      .then(user => {
        user && cookies.setUser(user);
        router.reload();
        cookies.deleteUser();
      })
      .catch(errorHandler);
  });

  return { hookForm, request, handleSubmit, router };
};
