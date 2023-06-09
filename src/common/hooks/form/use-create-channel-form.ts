import { useForm } from 'react-hook-form';
import { CreateChannelForm, createChannelResolver } from './resolver';
import { useRequestErrorHandler } from '../use-request-handler';
import { useRouter } from 'next/router';
import { useCreateChannelRequest } from '../request';

export const useCreateChannelForm = () => {
  const hookForm = useForm<CreateChannelForm>({
    mode: 'all',
    resolver: createChannelResolver,
    defaultValues: { members: [], name: 'New Channel ' + new Date().getTime(), type: 'private' },
  });
  const errorHandler = useRequestErrorHandler();
  const router = useRouter();

  const request = useCreateChannelRequest();

  const handleSubmit = hookForm.handleSubmit(data => {
    request
      .createChannel(data)
      .then(channel => {
        channel && router.push('/channel/' + channel.id);
      })
      .catch(errorHandler);
  });

  return { hookForm, request, handleSubmit, router };
};
