import { Button } from '@/common/components';
import { withAuth } from '@/common/utils';
import { useNotify } from '@/store';
import { User } from '@/types';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => withAuth(context);
type ProfileProps = {
  user: User;
};

const Profile = ({ user }: ProfileProps) => {
  const { notify } = useNotify();
  return (
    <div className='w-screen h-screen'>
      <Button
        variant='secondary'
        label='Toast'
        onClick={() => {
          notify('Clicked', 'error');
        }}
      />
    </div>
  );
};

export default Profile;
