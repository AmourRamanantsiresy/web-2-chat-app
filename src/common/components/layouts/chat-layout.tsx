import { Button, CreateIcon, Layout, SendIcon } from '@/common/components';
import { HiUser } from 'react-icons/hi';
import { NextLayoutProps } from '@/common/types';
import { Message, User } from '@/types';
import { cookies } from '@/common/utils';
import { ChangeEvent, useState } from 'react';

const UserIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiUser color='white' />
  </CreateIcon>
);

const MessageLayout = ({ message, user }: { message: Message; user: User }) => {
  return (
    <div className={`w-full flex p-4 ${user.id === message.senderId ? 'justify-end' : 'justify-start'}`}>
      <h1 style={{ maxWidth: '70%', minWidth: '300px' }} className='p-3 bg-indigo-200 rounded-md text-md text-start'>
        {message.content}
      </h1>
    </div>
  );
};

export const ChatLayout = ({
  name,
  messages,
  user,
  sendMessage,
  isLoading,
}: {
  name: string;
  messages: Message[];
  user: User;
  sendMessage: (e: any) => any;
  isLoading: boolean;
}) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => setMessage(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Promise.resolve(sendMessage(message)).then(() => {
      setMessage('');
    });
  };

  return (
    <Layout>
      <div className='flex flex-col w-screen h-screen'>
        <div className='w-full h-2/6 bg-indigo-300'></div>
        <div className='overflow-hidden absolute top-1/2 left-1/2 p-4 w-4/6 h-5/6 bg-white rounded shadow-md -translate-x-1/2 -translate-y-1/2'>
          <div className='flex justify-end items-center w-full'>
            <h1 className='w-full'>{name}</h1>
            <Button href='/profile' variant='secondary' label='Profile' icon={<UserIcon />} />
          </div>
          <div className='flex overflow-x-hidden overflow-y-scroll mb-1 w-full h-5/6 bg-gray-100'>
            <div style={{ minWidth: '100%' }} className='p-9 my-2 w-full'>
              {messages.length === 0 && (
                <div className='flex justify-center items-center w-full h-full'>
                  <h1 className='text-2xl opacity-50 select-none'>Say Hello first</h1>
                </div>
              )}
              {messages.length > 0 &&
                messages.map((message, k) => (
                  <MessageLayout user={user} message={message} key={`${message.id}-${k}`} />
                ))}
            </div>
          </div>
          <form
            className='flex absolute bottom-0 left-0 justify-around items-center w-full h-16 text-white bg-indigo-300'
            onSubmit={handleSubmit}
          >
            <textarea
              className='px-2 m-1 ml-3 w-full h-14 text-black rounded-md focus:outline-none apparence-none focus:border-blue-400 focus:shadow-blue-400'
              value={message}
              onChange={handleChange}
            />
            <button disabled={isLoading} type='submit' className='mx-2'>
              <SendIcon background='bg-indigo-500' color='white' width='25px' />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
