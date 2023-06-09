import { Button, CreateIcon, Layout } from '@/common/components';
import { HiChat, HiLogout, HiPlus, HiUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { NextLayoutProps } from '@/common/types';
import { authProvider } from '@/providers';
import { useRouter } from 'next/router';

const ListChannelIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <FaUsers color='white' />
  </CreateIcon>
);

const PlusIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiPlus color='white' />
  </CreateIcon>
);
const LogoutIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiLogout color='white' />
  </CreateIcon>
);
const ListUsersIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiUsers color='white' />
  </CreateIcon>
);

export const ProfileLayout = ({ children }: NextLayoutProps) => {
  const { push } = useRouter();

  const handleLogout = () => {
    authProvider.logout();
    push('/login');
  };

  return (
    <Layout>
      <div className='flex flex-col w-screen h-screen'>
        <div className='w-full h-2/6 bg-indigo-300'></div>
        <div className='overflow-hidden absolute top-1/2 left-1/2 p-4 w-5/6 h-5/6 bg-white rounded shadow-md -translate-x-1/2 -translate-y-1/2'>
          <div className='flex justify-end items-center w-full'>
            {/* <Button href='/board' variant='secondary' label='Chat' icon={<ChatIcon />} /> */}
            <Button href='/user/list' variant='secondary' label='Users List' icon={<ListUsersIcon />} />
            <Button href='/channel/list' variant='secondary' label='Channels List' icon={<ListChannelIcon />} />
            <Button href='/channel/create' variant='secondary' label='Create channel' icon={<PlusIcon />} />
            <Button onClick={handleLogout} variant='primary' label='Logout' icon={<LogoutIcon />} />
          </div>
          <div className='flex w-full'>
            <div className='p-9 my-2 w-full h-full bg-gray-100 rounded'>{children}</div>
          </div>
          <div className='flex absolute bottom-0 left-0 justify-center items-center w-full h-16 text-white bg-indigo-300'>
            <h1>Copyright ®</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
