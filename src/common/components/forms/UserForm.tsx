import { DomainUser, EditableUser } from '@/common/types';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/common/components/index';
import { userProvider } from '@/providers';
import { printError } from '@/common/utils';
import { useGlobalStore } from '@/store';
import { updateUserSchema } from '../utils';

interface UserFromProps {
  user: DomainUser | null;
}

export const UserForm = (props: UserFromProps) => {
  const { user } = props;
  const form = useForm<EditableUser>({
    mode: 'all',
    resolver: zodResolver(updateUserSchema),
    defaultValues: { bio: user?.bio || '', name: user?.name || '', oldPassword: '', password: '' },
  });
  const { setUser } = useGlobalStore();

  const handleSubmit = form.handleSubmit(data => {
    const updateUser = async () => {
      const user = await userProvider.updateOne(data);
      setUser(user);
    };
    updateUser().catch(printError);
  });

  return (
    <div className='p-2 w-2/6'>
      <FormProvider {...form}>
        <h1>Edit my profile</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
          <Input name='name' label='Name' validate={true} />
          <Input name='bio' label='Bio' />
          <Input name='oldPassword' label='Old password' type='password' />
          <Input name='password' label='New password' type='password' />
          <Button label='Update' type='submit' />
        </form>
      </FormProvider>
    </div>
  );
};
