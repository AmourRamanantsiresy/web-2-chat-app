import { cookies } from '@/common/utils';
import { ChannelProvider } from '@/providers';
import { User } from '@/types';
import useSWRMutation from 'swr/mutation';
import { useRequestErrorHandler } from '../use-request-handler';

async function updateChannel(url: string, { arg }: { arg: { channelId: number; members: number[] } }) {
  const token = cookies.getAccessToken();
  const channelApi = ChannelProvider.api(token);
  const { channelId, members } = arg;
  return await channelApi.addMember(channelId, members);
}

export const useUpdateChannelRequest = (channelId: number, user: User) => {
  const errorHandler = useRequestErrorHandler();
  const { isMutating, trigger, ...request } = useSWRMutation('/channel', updateChannel, { onError: errorHandler });

  return {
    isLoading: isMutating,
    updateChannel: trigger,
    ...request,
  };
};
