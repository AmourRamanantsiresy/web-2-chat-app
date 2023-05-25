import { ProfileLayout } from '@/common/components';
import { userProvider } from '@/providers';
import { useGlobalStore } from '@/store';
import { useCallback, useEffect } from 'react';

const Show = () => {
  const { setUser, user } = useGlobalStore();

  const fetchUser = useCallback(async () => {
    const user = await userProvider.getOne();
    setUser(user);
  }, []);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <ProfileLayout>
      {user && (
        <div className='flex gap-x-20 justify-start items-center'>
          <div className='flex justify-center items-center w-52 h-52 bg-indigo-200 rounded-full'>
            <p className='text-5xl text-gray-100'>{(user.name || '')[0]}</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-lg'>{user.name}</p>
            <p className='text-lg'>{user.bio}</p>
            <p className='text-lg'>{user.email}</p>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default Show;
