import { Button, CreateIcon, Layout } from '@/common/components';
import { HiUser } from 'react-icons/hi';
import { BiEdit, BiSend } from 'react-icons/bi';
import { Message, User } from '@/types';
import { useState } from 'react';

const UserIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <HiUser color='white' />
  </CreateIcon>
);
const EditIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <BiEdit color='white' />
  </CreateIcon>
);

const SendIcon = () => (
  <CreateIcon sx='bg-indigo-500'>
    <BiSend color='white' size='25px' />
  </CreateIcon>
);

const MessageLayout = ({ message, user }: { message: Message; user: User }) => {
  const isSender = user.id === message.senderId;
  return (
    <div className={`w-full flex p-4 ${isSender ? 'justify-end' : 'justify-start'}`}>
      <div>
        <p className={`text-sm text-gray-500 ${isSender && 'text-end'}`}>{message.sender.name}</p>
        <h1 style={{ maxWidth: '70%', minWidth: '300px' }} className='p-3 bg-indigo-200 rounded-md text-md text-start'>
          {message.content}
        </h1>
        <p className={`text-sm text-gray-500 ${isSender && 'text-end'}`}>{message.updatedAt}</p>
      </div>
    </div>
  );
};

type ChatLayoutProps = {
  name: string;
  messages: Message[];
  user: User;
  sendMessage: (e: any) => any;
  isLoading: boolean;
  type: 'channel' | 'user';
  id?: number;
};

export const ProfileButton = () => <Button href='/profile' variant='primary' label='Profile' icon={<UserIcon />} />;

export const ChatLayout = ({ name, messages, user, sendMessage, isLoading, type, id }: ChatLayoutProps) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => setMessage(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message.length > 0)
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
            {id && <Button href={`/channel/edit/${id}`} variant='secondary' label='Edit' icon={<EditIcon />} />}
            <ProfileButton />
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
            name='sendMessageForm'
            className='flex absolute bottom-0 left-0 justify-around items-center w-full h-16 text-white bg-indigo-300'
            onSubmit={handleSubmit}
          >
            <textarea
              className='px-2 m-1 ml-3 w-full h-14 text-black rounded-md focus:outline-none apparence-none focus:border-blue-400 focus:shadow-blue-400'
              value={message}
              onChange={handleChange}
            />
            <button disabled={isLoading || message.length === 0} type='submit' className='mx-2'>
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
