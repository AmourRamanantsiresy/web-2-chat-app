import { useRouter } from 'next/router';

const Error = () => {
  const {
    query: { code: _code, message: _message },
  } = useRouter();
  const code = _code as string;
  const message = _message as string;

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1 className='text-2xl mx-5'>{code}</h1> <div className='h-12 border-2 border-gray-400'>{message}</div>
    </div>
  );
};

export default Error;
