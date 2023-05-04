export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen bg-gray-700'>
        <div className='transparent'>
          <h1 className='text-center text-5xl m-8 text-white'>Login</h1>
          <form className='rounded px-8 pt-6 pb-8'>
            <div className='mb-4 mt-12'>
              <label
                className='block text-white text-sm font-bold mb-2'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-white text-sm font-bold mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Sign In
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-white hover:text-white-800'
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
}
