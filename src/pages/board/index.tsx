import { Layout, SendIcon } from '@/common/components';

const Board = () => {
  return (
    <Layout>
      <div className='flex relative flex-col items-center w-screen h-screen'>
        <nav className='flex items-center w-full h-12 bg-blue-500'>
          <h1 className='ml-3 font-bold'>Slack</h1>
        </nav>
        <div className='p-5 my-7 w-10/12 h-3/4 bg-gray-100 rounded'>
          <h1 className='text-black'>This is the chat room</h1>
        </div>
        <div className='flex justify-around items-center mt-2 w-10/12 h-12 rounded border'>
          <input
            className='px-5 py-2 mx-2 w-full bg-gray-100 rounded appearance-none focus:outline-none'
            placeholder='12'
          />
          <div className='mr-2'>
            <SendIcon
              background='bg-blue-500'
              color='rgb(59,130,246)'
              width='20px'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
