import { ProfileLayout } from '@/common/components';
import { UserForm } from '@/common/components';
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

  return <ProfileLayout>{user && <UserForm user={user} />}</ProfileLayout>;
};

export default Show;
