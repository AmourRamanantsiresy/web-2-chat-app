import { Button, CreateIcon, Input, ProfileButton } from '@/common/components';
import { CreateChannelForm } from '@/common/hooks';
import { useCreateChannelForm } from '@/common/hooks/form/use-create-channel-form';
import { withAuth } from '@/common/utils';
import { UserProvider } from '@/providers';
import { User } from '@/types';
import { GetServerSideProps } from 'next';
import { ChangeEvent } from 'react';
import { FormProvider, useFormContext, useWatch } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

type CreateProps = {
  users: User[];
  channelId: number;
  user: User;
};

export const getServerSideProps: GetServerSideProps = async context => {
  return withAuth(context, async user => {
    const channelId: any = context.params?.channelId || '';
    const userApi = UserProvider.api(user.token);
    const users = await userApi.getAll(user.id);

    return {
      props: {
        channelId: +channelId || -1,
        user,
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
  const form = useFormContext<CreateChannelForm>();
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
              key={`selection-user-create-channel-${k}-label`}
              htmlFor={`selection-user-create-channel-${k}`}
            >
              <input
                id={`selection-user-create-channel-${k}`}
                key={`selection-user-create-channel-${k}`}
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

const Create = ({ users }: CreateProps) => {
  const { handleSubmit, hookForm, request } = useCreateChannelForm();

  return (
    <div className='flex relative justify-center items-center w-screen h-screen'>
      <h1 className='absolute top-9 left-1/2 text-6xl -translate-x-1/2'>Create channel</h1>
      <FormProvider {...hookForm}>
        <form className='relative' name='createChannelForm' onSubmit={handleSubmit}>
          <div className='flex w-full'>
            <div>
              <Input label='Name' name='name' />
              <div>
                <select
                  className='px-2 py-3 mb-2 w-full text-gray-700 bg-white rounded-md border appearance-none focus:outline-blue-400 focus:border-blue-400 focus:shadow-blue-400'
                  {...hookForm.register('type')}
                >
                  <option value='public'>Public</option>
                  <option value='private'>Private</option>
                </select>
              </div>
            </div>
            <div>
              <CheckboxSelect users={users} />
            </div>
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

type CustomButtonProps = {
  isLoading: boolean;
};

const CustomButton = ({ isLoading }: CustomButtonProps) => {
  const { members } = useWatch();
  const { formState } = useFormContext();
  return (
    <Button
      label='Add'
      icon={<AddIcon />}
      type='submit'
      disabled={isLoading || members.length === 0 || Object.keys(formState.errors).length > 0}
    />
  );
};

export default Create;
