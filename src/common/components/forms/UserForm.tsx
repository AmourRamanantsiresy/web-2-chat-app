import { FormProvider } from 'react-hook-form';
import { Button, Input } from '@/common/components/index';
import { User } from '@/types';
import { useUpdateUserForm } from '@/common/hooks/form/use-update-user-form';

interface UserFromProps {
  user: User;
}

export const UserForm = ({ user }: UserFromProps) => {
  const { handleSubmit, hookForm, request } = useUpdateUserForm(user);

  return (
    <div className='p-2 w-2/6'>
      <FormProvider {...hookForm}>
        <h1>Edit my profile</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
          <Input name='name' label='Name' validate={true} />
          <Input name='email' label='Email' validate={true} />
          <Input name='bio' label='Bio' type='textarea' />
          <Input name='currentPassword' label='Current password' type='password' />
          <Input name='newPassword' label='New password' type='password' />
          <Input name='confirmPassword' label='Confirm password' type='password' />
          <Button label='Update' disabled={request.isLoading} type='submit' />
        </form>
      </FormProvider>
    </div>
  );
};
