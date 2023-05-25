import { useRouter } from 'next/router';
import { CreateIcon, HomeIcon } from '../icons';
import { useSidebar } from '@/store';
import { MenuThreeIcon } from '../icons/MenuThreeIcon';
import { HiUser } from 'react-icons/hi';
import Link from 'next/link';

const ProfileButton = () => {
  return (
    <Link href='/profile/show'>
      <CreateIcon sx='bg-indigo-500'>
        <HiUser color='white' />
      </CreateIcon>
    </Link>
  );
};

export const NavBar = () => {
  const { push } = useRouter();
  const { toggle: toggleSidebar } = useSidebar();

  const handleHome = () => {
    push('/home');
  };
  return (
    <nav className='flex items-center w-full h-14 bg-indigo-400'>
      <MenuThreeIcon onClick={toggleSidebar} background='bg-indigo-500' color='white' width='25px' />
      <h1 className='ml-3 w-10/12 font-bold text-white md:w-11/12 md:mr-14'>Slack</h1>
      <ProfileButton />
    </nav>
  );
};
