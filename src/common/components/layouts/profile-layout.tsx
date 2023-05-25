import { Button, CreateIcon, Layout, MenuButton } from '@/common/components';
import { HiChat, HiPencil, HiUser } from 'react-icons/hi';
import { NextLayoutProps } from '@/common/types';
import { ReactElement } from 'react';

const ChatIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiChat color='white' />
  </CreateIcon>
);

const UserIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiUser color='white' />
  </CreateIcon>
);

const EditIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiPencil color='white' />
  </CreateIcon>
);

export const ProfileLayout = ({ children }: NextLayoutProps) => {
  return (
    <Layout>
      <div className='flex flex-col w-screen h-screen'>
        <div className='w-full h-2/6 bg-indigo-300'></div>
        <div className='overflow-hidden absolute top-1/2 left-1/2 p-4 w-5/6 h-5/6 bg-white rounded shadow-md -translate-x-1/2 -translate-y-1/2'>
          <div className='flex justify-end items-center w-full'>
            <Button href='/board' variant='secondary' label='Chat' icon={<ChatIcon />} />
          </div>
          <div className='flex w-full'>
            <div className='w-72 h-full'>
              <MenuButton href='/profile/show' label='Profile' icon={<UserIcon />} />
              <MenuButton href='/profile/edit' label='Edit profile' icon={<EditIcon />} />
            </div>
            <div className='p-9 my-2 w-full h-full bg-gray-100 rounded'>{children}</div>
          </div>
          <div className='flex absolute bottom-0 left-0 justify-center items-center w-full h-16 bg-indigo-300'>
            <h1>Copyright ®</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
