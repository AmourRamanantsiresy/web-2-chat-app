import { Layout, MenuItem, MenuTitle, SendIcon } from '@/common/components';
import { authProvider } from '@/providers';
import { useRouter } from 'next/router';

const Board = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    push(authProvider.logout().redirection);
  };

  return (
    <Layout>
      <div className='flex relative flex-col items-center w-screen h-screen'>
        <nav className='flex items-center w-full h-12 bg-blue-500'>
          <h1 className='ml-3 w-11/12 font-bold'>Slack</h1>
          <button
            onClick={handleLogout}
            className='px-6 py-2 text-white bg-blue-800 rounded-lg shadow-sm hover:bg-blue-900 shadow-blue-500'
          >
            Logout
          </button>
        </nav>
        <div className='flex relative w-full h-full items-between'>
          <div className='p-4 w-1/6 h-full bg-blue-100'>
            <MenuTitle />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div className='flex relative flex-col justify-center items-center w-4/6 h-full'>
            <div className='p-5 my-7 w-10/12 h-3/4 bg-gray-100 rounded'>
              <h1 className='text-black'>This is the chat room</h1>
            </div>
            <div className='flex justify-around items-center mt-2 w-10/12 h-12 rounded border'>
              <input
                className='px-5 py-2 mx-2 w-full bg-gray-100 rounded appearance-none focus:outline-none'
                placeholder='12'
              />
              <div className='mr-2'>
                <SendIcon background='bg-blue-500' color='rgb(59,130,246)' width='20px' />
              </div>
            </div>
          </div>
          <div className='p-4 w-1/6 h-full bg-blue-100'>this</div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
