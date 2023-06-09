import { Button, Input, Layout } from '@/common/components';
import { CreateUser } from '@/common/types';
import { cookies, printError } from '@/common/utils';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { SignUpSchema, signUpSchema, userSignUpDefaultValues } from './signup/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { authProvider } from '@/providers';
import { useGlobalStore } from '@/store';

const SignInPage = () => {
  const form = useForm<SignUpSchema>({
    defaultValues: userSignUpDefaultValues,
    mode: 'all',
    resolver: zodResolver(signUpSchema),
  });

  const { setUser } = useGlobalStore();
  const { push } = useRouter();

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const signUp = async () => {
      const user = { ...createUser };
      delete user.confirmPassword;
      cookies.setUser(user);
      const { authenticate, redirection } = await authProvider.signUp(user);
      if (authenticate) {
        setUser(user);
        push(redirection).catch(printError);
      } else {
        push(redirection).catch(printError);
      }
    };
    signUp().catch(print);
  });

  return (
    <FormProvider {...form}>
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
                <span className='text-blue-500 cursor-pointer hover:text-blue-700' onClick={() => push('/login')}>
                  Already have an account?
                </span>{' '}
                <Button label='Send' type='submit' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignInPage;
