import { Layout } from '@/common/components';
import { useEffect, useState } from 'react';
import { DomainUser } from '@/common/types';
import { userProvider } from '@/providers';
import { printError } from '@/common/utils';

const Home = () => {
  const [user, setUser] = useState<DomainUser | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const fetchedUser = await userProvider.getOne();
      setUser(fetchedUser);
    };
    fetchUser()
      .catch(printError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className='flex w-screen h-screen'>{JSON.stringify(user || {})}</div>
    </Layout>
  );
};

export default Home;
