import { Button, Input } from '@/common/components';
import { useCreateChannelForm } from '@/common/hooks/form/use-create-channel-form';
import { cookies, withAuth } from '@/common/utils';
import { UserProvider } from '@/providers';
import { CreateChannel, UserMin } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { FormProvider, useFormContext, useWatch } from 'react-hook-form';
import { MultiSelect, Option } from 'react-multi-select-component';

const parseUserToOption = (users: UserMin[]) =>
  users.map(({ name, id }) => ({ label: name, value: id.toString() } as Option));
const parseOptionToMember = (options: Option[]) => options.map(({ value }) => value as string);

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { redirect } = await withAuth(context);
  if (redirect && redirect.destination === '/login') {
    return { redirect };
  }
  const accessToken = cookies.getAccessToken(context.req.cookies);
  const users = await UserProvider.api(accessToken).getAll();

  return {
    props: {
      users: parseUserToOption(users),
    },
  };
};

type CreateProps = {
  users: Option[];
};
type MultipleSelectProps = {
  users: Option[];
};

const MultipleSelect = (props: MultipleSelectProps) => {
  const form = useFormContext();
  const { members } = useWatch<CreateChannel>();
  const { users } = props;

  const handleChange = (users: Option[]) => {
    form.setValue('members', parseOptionToMember(users) as any);
  };

  return (
    <MultiSelect
      className='py-3'
      labelledBy='label'
      value={users.filter(({ value }) => members?.includes(value))}
      onChange={handleChange}
      options={users}
    />
  );
};

const Create = ({ users }: CreateProps) => {
  const { handleSubmit, hookForm, request } = useCreateChannelForm();

  return (
    <div className='flex relative justify-center items-center w-screen h-screen'>
      <FormProvider {...hookForm}>
        <form className='relative' onSubmit={handleSubmit}>
          <Input label='Name' name='name' />
          <div>
            <select
              className='px-2 py-3 mb-2 w-full text-gray-700 bg-white rounded-md border appearance-none focus:outline-blue-400 focus:border-blue-400 focus:shadow-blue-400'
              {...hookForm.register('type')}
            >
              <option value='public'>Public</option>
              <option value='private'>Private</option>
            </select>
          </div>
          <MultipleSelect users={users} />
          <Button className='-translate-x-2' label='Create' disabled={request.isLoading} />
        </form>
      </FormProvider>
    </div>
  );
};

export default Create;
