import { cookies } from '@/common/utils';
import { MessageProvider } from '@/providers';
import useSWR from 'swr';
import useSwrMutation from 'swr/mutation';
import { useRequestErrorHandler } from '../use-request-handler';
import { SendMessageToChannel, SendMessageToUser } from '@/types';

async function sendMessage(
  url: string,
  { arg }: { arg: { type: 'sendToChannel' | 'sendToUser'; message: SendMessageToUser | SendMessageToChannel } }
) {
  const accessToken = cookies.getAccessToken();
  const messageProvider = MessageProvider.api(accessToken);

  return await messageProvider[arg.type](arg.message as any);
}

export const useGetMessageRequest = (type: 'getByChannelId' | 'getByUserId', id: number, token: string) => {
  const messageApi = MessageProvider.api(token);
  const errorHandler = useRequestErrorHandler();
  const getMessageRequest = useSWR('/message', () => messageApi[type](id), {
    refreshInterval: 1_000,
    onError: errorHandler,
  });
  const sendMessageRequest = useSwrMutation('/message', sendMessage, {
    onError: errorHandler,
    onSuccess: () => getMessageRequest.mutate(),
  });

  return { getMessageRequest, sendMessageRequest };
};
