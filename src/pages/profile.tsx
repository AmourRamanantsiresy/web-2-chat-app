import { Button, ProfileLayout, Redirection, SideBar, UserForm } from '@/common/components';
import { withAuth } from '@/common/utils';
import { ChannelProvider, UserProvider } from '@/providers';
import { useNotify } from '@/store';
import { User } from '@/types';
import { GetServerSidePropsContext } from 'next';

const userChatLink = (id: number) => `/message/${id}`;
const channelChatLink = (id: number) => `/channel/${id}`;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return withAuth(context, async user => {
    const userApi = UserProvider.api(user.token);
    const channelApi = ChannelProvider.api(user.token);
    const users = await userApi.getAll(user.id);
    const channels = await channelApi.getAll();

    return {
      props: {
        user,
        users: users.map(u => ({ name: u.name, href: userChatLink(u.id) })),
        channels: channels.map(c => ({ name: c.name, href: channelChatLink(c.id) })),
      },
    };
  });
};
type ProfileProps = {
  user: User;
  users: Redirection[];
  channels: Redirection[];
};

const Profile = ({ user, channels, users }: ProfileProps) => {
  const { bio, email, name } = user;
  return (
    <ProfileLayout
      sideBarL={<SideBar title='Channels' createChannel={true} values={channels} />}
      sideBarR={<SideBar title='Users' createChannel={false} values={users} />}
    >
      <div className='flex justify-start items-start w-full h-hull'>
        <div className='p-4 w-5/12 h-full'>
          <div className='py-6'>
            <h1 className='text-lg'>Informations</h1>
          </div>
          <p className='font-bold text-md'>{name}</p>
          <p className='font-bold text-md'>{email}</p>
          <div className='relative mt-6'>
            <p className='w-2/3 text-md'>{bio}</p>
          </div>
        </div>
        <div className='w-2/12'></div>
        <UserForm user={user} />
      </div>
    </ProfileLayout>
  );
};

export default Profile;
