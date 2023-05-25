import { ChatHeader, Layout, NavBar, SendIcon, SideBar } from '@/common/components';

const Board = () => {
  return (
    <Layout>
      <div className='flex relative flex-col items-center w-screen h-screen'>
        <NavBar />
        <div className='flex relative w-full h-full items-between'>
          <SideBar />
          <div className='flex relative flex-col justify-center items-center mx-auto w-4/6 h-full'>
            <ChatHeader />
            <div className='p-5 mb-7 w-10/12 h-3/4 bg-gray-100 rounded'>
              <h1 className='text-black'>This is the chat room</h1>
            </div>
            <div className='flex justify-around items-center mt-2 w-10/12 h-12 bg-indigo-400 rounded border'>
              <input
                className='px-5 py-2 mx-1 w-full bg-gray-100 rounded appearance-none focus:outline-none'
                placeholder='12'
              />
              <div className='mr-2'>
                <SendIcon background='bg-indigo-500' color='white' width='20px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
