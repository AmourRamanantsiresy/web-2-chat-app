import { Input } from '@/common/components';
import { cookies, withAuth } from '@/common/utils';
import { MessageProvider, UserProvider } from '@/providers';
import { CreateChannel, User } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { redirect } = await withAuth(context);
  if (redirect && redirect.destination === '/login') {
    return { redirect };
  }
  const accessToken = cookies.getAccessToken(context.req.cookies);
  const users = await UserProvider.api(accessToken).getAll();
  return {
    props: {
      users,
    },
  };
};

type CreateProps = {
  users: User[];
};

const Create = ({ users }: CreateProps) => {
  const form = useForm<CreateChannel>({ mode: 'all', defaultValues: { members: [], name: '', type: 'public' } });

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <FormProvider {...form}>
        <form>
          <Input label='Name' name='name' />
          <select
            className='px-2 py-3 w-full text-gray-700 bg-white rounded-md border appearance-none focus:outline-blue-400 focus:border-blue-400 focus:shadow-blue-400'
            {...form.register('type')}
          >
            <option value='public'>Public</option>
            <option value='private'>Private</option>
          </select>
        </form>
      </FormProvider>
    </div>
  );
};

export default Create;
