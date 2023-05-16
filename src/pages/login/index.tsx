import { Button, Input, Layout } from '@/common/components';
import { CreateUser, LoginUser } from '@/common/types';
import { cache } from '@/common/utils';
import { authProvider } from '@/providers/auth-provider';
import { useGlobalStore } from '@/store/useGlobalStore';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

const userSignInDefaultValues: LoginUser = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const form = useForm<CreateUser>({
    defaultValues: userSignInDefaultValues,
    mode: 'all',
  });

  const { push } = useRouter();
  const { setUser, setErrorMessage } = useGlobalStore();

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const user = { ...createUser };
    delete user.confirmPassword;
    const login = async () => {
      const { redirection, data, authenticate } = await authProvider.signIn(user);
      if (authenticate) {
        setUser(data);
      } else {
        setErrorMessage(data);
      }
      push(redirection);
    };
    login();
  });

  return (
    <Layout>
      <FormProvider {...form}>
        <div className='flex justify-center items-center w-screen h-screen bg-white'>
          <div className='flex flex-col mx-2 w-screen rounded-2xl border-none item-center md:w-1/2 lg:w-2/5 2xl:1/4'>
            <h1 className='m-8 text-5xl text-center text-black'>Login</h1>
            <form className='self-center px-8 pb-10 rounded' onSubmit={handleSubmit}>
              <div className='mt-12 mb-1'>
                <Input label='Email' name='email' />
                <Input label='Password' name='password' type='password' />
              </div>
              <div className='flex justify-between items-center w-full'>
                <span className='text-blue-500 cursor-pointer hover:text-blue-700' onClick={() => push('/signup')}>
                  Create account?
                </span>{' '}
                <Button label='Send' type='submit' />
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
};

export default SignInPage;
