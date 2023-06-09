import { withAuth } from '@/common/utils';
import { User } from '@/types';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => withAuth(context);
type ProfileProps = {
  user: User;
};

const Profile = ({ user }: ProfileProps) => {
  return <div className='w-screen h-screen'></div>;
};

export default Profile;
