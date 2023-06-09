import { Button, Input, Layout } from '@/common/components';
import { useRouter } from 'next/router';
import { FormProvider } from 'react-hook-form';
import { GetServerSidePropsContext } from 'next';
import { withAuth } from '@/common/utils';
import { useLoginForm } from '@/common/hooks';

const SignInPage = () => {
  const { handleSubmit, hookForm, request, router } = useLoginForm();
  return (
    <Layout>
      <FormProvider {...hookForm}>
        <div className='flex justify-center items-center w-screen h-screen bg-white'>
          <div className='flex flex-col mx-2 w-screen rounded-2xl border-none item-center md:w-1/2 lg:w-2/5 2xl:1/4'>
            <h1 className='m-8 text-5xl text-center text-black'>Login</h1>
            <form className='self-center px-8 pb-10 rounded' name='loginForm' onSubmit={handleSubmit}>
              <div className='mt-12 mb-1'>
                <Input label='Email' name='email' />
                <Input label='Password' name='password' type='password' />
              </div>
              <div className='flex justify-between items-center w-full'>
                <span
                  className='text-blue-500 cursor-pointer hover:text-blue-700'
                  onClick={() => router.push('/sign-up')}
                >
                  Create an account?
                </span>{' '}
                <Button label='Send' type='submit' disabled={request.isLoading} />
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return withAuth(context);
};

export default SignInPage;
