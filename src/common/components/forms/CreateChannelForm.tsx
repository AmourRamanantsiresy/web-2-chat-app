import { FormProvider, useForm } from 'react-hook-form';
import { CreateChannel } from '@/common/types';
import { Input, SelectInputMultiple } from '@/common/components';

export const CreateChannelForm = () => {
  const form = useForm<CreateChannel>({ mode: 'all', defaultValues: { name: '', members: [], type: 'private' } });
  return (
    <FormProvider {...form}>
      <form>
        <Input label='Channel name' name='name' />
        <SelectInputMultiple<any>
          options={[{ name: 'user1' }, { name: 'user2' }, { name: 'user3' }]}
          renderName='name'
        />
      </form>
    </FormProvider>
  );
};
