import { ChatLayout } from '@/common/components';
import { useGetMessageRequest, useRequestErrorHandler } from '@/common/hooks';
import { withAuth } from '@/common/utils';
import { ChannelProvider, MessageProvider } from '@/providers';
import { Channel, Message, User } from '@/types';
import { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = context => {
  return withAuth(context, async user => {
    const channelApi = ChannelProvider.api(user.token);

    try {
      const channelId: any = context.params?.channelId || '';
      const currentChannel = await channelApi.getOne(+channelId);
      return {
        props: {
          currentChannel,
          user,
        },
      };
    } catch (err) {
      return {
        props: {
          error: err as AxiosError,
        },
      };
    }
  });
};

type ChannelProp = {
  error?: AxiosError;
  currentChannel?: Channel;
  user: User;
};

const sortMessage = (m1: Message, m2: Message) => new Date(m1.createdAt).getTime() - new Date(m2.createdAt).getTime();

const Channel = ({ error, currentChannel, user }: ChannelProp) => {
  const { getMessageRequest, sendMessageRequest } = useGetMessageRequest(
    'getByChannelId',
    currentChannel?.id || -1,
    user.token
  );

  const sendMessage = (mess: string) => {
    sendMessageRequest.trigger({
      message: { channelId: currentChannel?.id || -1, content: mess, senderId: user.id },
      type: 'sendToChannel',
    });
  };

  return (
    <ChatLayout
      isLoading={getMessageRequest.isLoading || sendMessageRequest.isMutating}
      sendMessage={sendMessage}
      user={user}
      messages={getMessageRequest.data?.sort(sortMessage) || []}
      name={currentChannel?.name || ''}
    />
  );
};

export default Channel;
