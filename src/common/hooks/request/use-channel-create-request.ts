import { ChannelProvider } from '@/providers';
import useSwrMutation from 'swr/mutation';
import { cookies } from '@/common/utils';
import { ChannelType, CreateChannel } from '@/types';
import { CreateChannelForm } from '../form/resolver';

async function createChannel(url: string, { arg }: { arg: CreateChannelForm }) {
  const accessToken = cookies.getAccessToken();
  const channelApi = ChannelProvider.api(accessToken);
  const { members, name, type } = arg;

  const newChannel: CreateChannel = { name, type: type as ChannelType, members: members.map(e => +e) };

  return await channelApi.createChannel(newChannel);
}

export const useCreateChannelRequest = () => {
  const { isMutating, trigger, ...others } = useSwrMutation('/channel', createChannel);

  return {
    isLoading: isMutating,
    createChannel: trigger,
    ...others,
  };
};
