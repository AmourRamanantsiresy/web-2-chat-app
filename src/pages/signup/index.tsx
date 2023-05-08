import { Input, Layout } from '@/common/components';
import { CreateUser } from '@/common/types';
import { cache } from '@/common/utils';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

const userSignUpDefaultValues: CreateUser = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  userName: '',
  confirmPassword: '',
};

const passwordConfirmValidator = (value: string, user: CreateUser) => {
  if (value.length === 0) {
    return 'Ce champ est requis.';
  } else if (user.password !== value) {
    return 'Les mots de passe ne corespondent pas';
  }
};

const SignInPage = () => {
  const form = useForm<CreateUser>({
    defaultValues: userSignUpDefaultValues,
    mode: 'all',
  });

  const { push } = useRouter();

  const handleSubmit = form.handleSubmit((createUser: CreateUser) => {
    const user = { ...createUser };
    delete user.confirmPassword;
    cache.user(user);
    push('/board');
  });

  return (
    <Layout>
      <FormProvider {...form}>
        <div className='flex justify-center items-center w-screen h-screen bg-white'>
          <div className='mx-2 w-screen rounded border border-gray-400 md:w-1/2 lg:w-2/5'>
            <h1 className='m-8 text-5xl text-center text-black'>SignUp</h1>
            <form className='px-8 pb-10 rounded' onSubmit={handleSubmit}>
              <div className='mt-12 mb-4'>
                <Input label='Last Name' name='lastName' />
                <Input label='First Name' name='firstName' />
                <Input label='Username' name='userName' />
                <Input label='Email' name='email' />
                <Input label='Password' name='password' />
                <Input
                  label='Confirm password'
                  name='confirmPassword'
                  validate={passwordConfirmValidator}
                />
              </div>
              <div className='flex justify-end w-full'>
                <button
                  type='submit'
                  className='px-6 py-1 text-white bg-blue-400 rounded hover:bg-blue-500'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
};

export default SignInPage;
