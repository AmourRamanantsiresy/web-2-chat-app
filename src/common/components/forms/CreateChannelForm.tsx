import { FormProvider, useForm } from 'react-hook-form';
import { CreateChannel } from '@/common/types';
import { Input, SelectInput, SelectMultipleInput } from '@/common/components';

export const CreateChannelForm = () => {
  const form = useForm<CreateChannel>({ mode: 'all', defaultValues: { name: '', members: [], type: 'private' } });
  return (
    <FormProvider {...form}>
      <form name='createChannelForm'>
        <Input label='Channel name' name='name' />
        <SelectMultipleInput<any>
          label='Members'
          options={[]}
          renderName='name'
          renderRef='name'
          onChange={e => console.log(e)}
          key='multiple-select-user-channel'
        />
      </form>
    </FormProvider>
  );
};
