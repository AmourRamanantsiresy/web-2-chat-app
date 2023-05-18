import { Button, Layout, LogoutIcon } from '@/common/components';

const Home = () => {
  return (
    <Layout>
      <div className='flex w-screen h-screen'>
        <div className='flex flex-col justify-start items-center pt-6 w-1/5 h-full bg-indigo-200'>
          <div className='overflow-hidden w-52 h-52 bg-gray-100 rounded-full'></div>
          <div className='px-4 mt-10 w-full h-4/6'>
            <h1 className='font-bold'>Username</h1>
            <h1 className='mt-2'>User bio for example this is the bio.</h1>
          </div>
          <div className='w-full h-16'>
            <Button label='Logout' icon={<LogoutIcon background='bg-indigo-500' color='white' width='20px' />} />
          </div>
        </div>
        <div className='overflow-x-hidden overflow-y-scroll py-6 w-full h-full bg-indigo-400'></div>
      </div>
    </Layout>
  );
};

export default Home;
