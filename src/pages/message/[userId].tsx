import { ChatLayout } from '@/common/components';
import { useGetMessageRequest } from '@/common/hooks';
import { withAuth } from '@/common/utils';
import { Message, User } from '@/types';
import { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = context => {
  return withAuth(context, async user => {
    try {
      const userId: any = context.params?.userId || '';
      return {
        props: {
          recipientId: +userId || -1,
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
  recipientId: number;
  user: User;
};

const sortMessage = (m1: Message, m2: Message) => new Date(m1.createdAt).getTime() - new Date(m2.createdAt).getTime();

const User = ({ recipientId, user }: ChannelProp) => {
  const { getMessageRequest, sendMessageRequest } = useGetMessageRequest(
    'getByUserId',
    +(recipientId || -1),
    user.token
  );

  const sendMessage = (mess: string) => {
    sendMessageRequest.trigger({
      message: { recipientId, content: mess, senderId: user.id },
      type: 'sendToUser',
    });
  };

  return (
    <ChatLayout
      isLoading={getMessageRequest.isLoading || sendMessageRequest.isMutating}
      sendMessage={sendMessage}
      user={user}
      messages={getMessageRequest.data?.sort(sortMessage) || []}
      name={`User@${recipientId}`}
    />
  );
};

export default User;
