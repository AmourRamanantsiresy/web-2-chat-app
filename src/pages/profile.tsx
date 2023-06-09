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
  const { bio, email, name } = user;
  return (
    <ProfileLayout>
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
