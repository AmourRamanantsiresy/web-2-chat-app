import { useForm } from 'react-hook-form';
import { UpdateChannelForm, updateChannelResolver } from './resolver';
import { useRequestErrorHandler } from '../use-request-handler';
import { useRouter } from 'next/router';
import { useUpdateChannelRequest } from '../request';
import { User } from '@/types';

export const useUpdateChannelForm = (channelId: number, user: User) => {
  const hookForm = useForm<UpdateChannelForm>({
    mode: 'all',
    resolver: updateChannelResolver,
    defaultValues: { members: [] },
  });
  const errorHandler = useRequestErrorHandler();
  const router = useRouter();

  const request = useUpdateChannelRequest(channelId, user);

  const handleSubmit = hookForm.handleSubmit(({ members }) => {
    request
      .updateChannel({ members: members.map(e => +e || -1), channelId })
      .then(channel => {
        channel && router.push('/channel/edit/' + channelId);
      })
      .catch(errorHandler);
  });

  return { hookForm, request, handleSubmit, router };
};
