import { Button, CreateIcon, Layout } from '@/common/components';
import { useEffect } from 'react';
import { userProvider } from '@/providers';
import { printError } from '@/common/utils';
import { UserForm } from '@/pages/home/UserForm';
import { useGlobalStore } from '@/store';
import { HiChat } from 'react-icons/hi';
import Link from 'next/link';

const Home = () => {
  const { setUser, user } = useGlobalStore();

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await userProvider.getOne();
      setUser(fetchedUser);
    };
    fetchUser().catch(printError);
  }, []);

  return (
    <Layout>
      <div className='flex w-screen h-screen'>
        <div className='w-2/6'>
          <h1>Name :</h1>
          <p>{user?.name}</p>
          <h1 className='mt-4'>Bio :</h1>
          <p>{user?.bio}</p>
          <h1 className='mt-4'>Email :</h1>
          <p>{user?.email}</p>
        </div>
        <UserForm user={user} />
        <div className=''>
          <Link href='/board'>
            <Button
              variant='secondary'
              onClick={() => {}}
              label='Chat'
              icon={
                <CreateIcon sx='bg-indigo-500'>
                  <HiChat color='white' />
                </CreateIcon>
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
