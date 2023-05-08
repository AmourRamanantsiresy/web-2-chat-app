import { useAuthenticate } from '@/common/hooks';

const SignInPage = () => {
  useAuthenticate();
  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='transparent'>
          <h1 className='m-8 text-5xl text-center text-white'>Login</h1>
          <form className='px-8 pt-6 pb-8 rounded'>
            <div className='mt-12 mb-4'>
              <label
                className='block mb-2 text-sm font-bold text-white'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='px-3 py-2 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='mb-6'>
              <label
                className='block mb-2 text-sm font-bold text-white'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='px-3 py-2 mb-3 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
              />
            </div>
            <div className='flex justify-between items-center'>
              <button
                className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                type='button'
              >
                Login
              </button>
              <a
                className='inline-block text-sm font-bold text-white align-baseline hover:text-white-800'
                href='#'
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
