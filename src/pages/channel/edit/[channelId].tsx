import { Button, CreateIcon, ProfileButton } from '@/common/components';
import { UpdateChannelForm, useUpdateChannelForm } from '@/common/hooks';
import { withAuth } from '@/common/utils';
import { UserProvider } from '@/providers';
import { User } from '@/types';
import { GetServerSideProps } from 'next';
import { ChangeEvent, useEffect } from 'react';
import { FormProvider, useFormContext, useWatch } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

type ChannelEditProps = {
  user: User;
  channelId: number;
  users: User[];
};

export const getServerSideProps: GetServerSideProps = async context => {
  return withAuth(context, async user => {
    const channelId: any = context.params?.channelId;
    const userApi = UserProvider.api(user.token);
    const users = await userApi.getAll(user.id);

    return {
      props: {
        user,
        channelId,
        users,
      },
    };
  });
};
type CheckboxSelectProps = {
  users: User[];
};

const AddIcon = () => {
  return (
    <CreateIcon sx='bg-indigo-500'>
      <FaPlus color='white' />
    </CreateIcon>
  );
};

const CheckboxSelect = ({ users }: CheckboxSelectProps) => {
  const form = useFormContext<UpdateChannelForm>();
  const { members: actualMembers } = useWatch();

  const handleChange = (userId: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const state = e.target.checked;
    form.setValue('members', state ? [...actualMembers, userId] : actualMembers?.filter((e: string) => e !== userId));
  };

  return (
    <>
      <div
        style={{ width: '300px', maxHeight: '45vh' }}
        className='flex overflow-x-hidden overflow-y-scroll relative flex-col justify-start p-2'
      >
        {users.length === 0 && <h1 className='p-4 w-full text-center'>Not user to select.</h1>}
        {users.length > 0 &&
          users.map((user, k) => (
            <label
              className='p-3 w-full border cursor-pointer hover:bg-gray-100'
              key={`selection-user-edit-channel-${k}-label`}
              htmlFor={`selection-user-edit-channel-${k}`}
            >
              <input
                id={`selection-user-edit-channel-${k}`}
                key={`selection-user-edit-channel-${k}`}
                type='checkbox'
                className='mr-4'
                onChange={handleChange(user.id.toString())}
              />
              {user.name}
            </label>
          ))}
      </div>
    </>
  );
};

type CustomButtonProps = {
  isLoading: boolean;
};

const CustomButton = ({ isLoading }: CustomButtonProps) => {
  const { members } = useWatch();
  return <Button label='Add' icon={<AddIcon />} type='submit' disabled={isLoading || members.length === 0} />;
};

const ChannelEdit = ({ user, channelId, users }: ChannelEditProps) => {
  const { hookForm, handleSubmit, request } = useUpdateChannelForm(channelId, user);

  return (
    <div className='flex relative justify-center items-center w-screen h-screen'>
      <h1 className='absolute top-9 left-1/2 text-6xl -translate-x-1/2'>Update channel members</h1>
      <FormProvider {...hookForm}>
        <form className='relative' name='editChannelForm' onSubmit={handleSubmit}>
          <div>
            <CheckboxSelect users={users} />
          </div>
          <div className='flex'>
            <CustomButton isLoading={request.isLoading} />
            <ProfileButton />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ChannelEdit;
