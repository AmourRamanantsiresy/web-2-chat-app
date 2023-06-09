import { FormProvider } from 'react-hook-form';
import { useSignUpForm } from '@/common/hooks';
import { Button, Input } from '@/common/components';
import { useRouter } from 'next/router';

const SignInPage = () => {
  const { handleSubmit, hookForm, request, router } = useSignUpForm();

  return (
    <FormProvider {...hookForm}>
      <div className='flex justify-center items-center w-screen h-screen bg-white'>
        <div className='flex flex-col mx-2 w-screen rounded-2xl border-none item-center md:w-1/2 lg:w-2/5 2xl:1/4'>
          <h1 className='m-8 text-5xl text-center text-black'>SignUp</h1>
          <form className='self-center px-8 pb-10 rounded' name='registrationForm' onSubmit={handleSubmit}>
            <div className='mt-12 mb-1'>
              <Input label='name' name='name' />
              <Input label='Email' name='email' />
              <Input type='password' label='Password' name='password' />
              <Input type='password' label='Confirm password' name='confirmPassword' />
            </div>
            <div className='flex justify-end w-full'>
              <div className='flex justify-between items-center w-full'>
                <span
                  className='text-blue-500 cursor-pointer hover:text-blue-700'
                  onClick={() => router.push('/login')}
                >
                  Already have an account?
                </span>{' '}
                <Button label='Send' type='submit' disabled={request.isLoading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignInPage;
