import { Button, ProfileLayout, UserForm } from '@/common/components';
import { withAuth } from '@/common/utils';
import { useNotify } from '@/store';
import { User } from '@/types';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => withAuth(context);
type ProfileProps = {
  user: User;
};

const Profile = ({ user }: ProfileProps) => {
  const { bio, email, name, id } = user;
  return (
    <ProfileLayout bio={bio}>
      <div className='flex justify-around items-center w-full h-hull'>
        <div className='w-5/12 p4'>
          <h1 className='text-lg'>Informations</h1>
          <p className='font-bold text-md'>{name}</p>
          <p className='font-bold text-md'>{email}</p>
        </div>
        <UserForm user={user} />
      </div>
    </ProfileLayout>
  );
};

export default Profile;
