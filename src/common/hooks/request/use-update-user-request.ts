import { UserProvider } from '@/providers';
import useSwrMutation from 'swr/mutation';
import { cookies } from '@/common/utils';
import { UpdateUserForm } from '../form/resolver/user-update-resolver';
import { EditableUser } from '@/common/types';

async function updateUser(url: string, { arg }: { arg: UpdateUserForm }) {
  const { bio, confirmPassword, currentPassword, email, name } = arg;
  const accessToken = cookies.getAccessToken();

  const user: EditableUser = {
    bio,
    name,
    email,
    oldPassword: currentPassword,
    password: confirmPassword,
  };

  return await UserProvider.api(accessToken).updateOne(user);
}

export const useUpdateUserRequest = () => {
  const { isMutating, trigger, ...others } = useSwrMutation('/updateUser', updateUser);

  return {
    isLoading: isMutating,
    updateUser: trigger,
    ...others,
  };
};
