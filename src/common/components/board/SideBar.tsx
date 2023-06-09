import { HiPlusCircle, HiUserGroup } from 'react-icons/hi';
import { MenuItem } from '.';
import { Channel, User } from '@/types';

export type Redirection = {
  name: string;
  href: string;
};

type SideBarProps = {
  values: Redirection[];
  createChannel?: boolean;
  title: string;
};

export const SideBar = ({ title, values, createChannel }: SideBarProps) => {
  return (
    <div className='relative p-4 h-full bg-gray-100 transition-1 w-fit'>
      <h1 className='text-lg p2'>{title}</h1>
      <div className='overflow-y-scroll' style={{ height: '51.5vh' }}>
        {values?.map((v, k) => (
          <MenuItem icon={<HiUserGroup />} key={`select-user-profile-${v.name}-${k}`} lastMessage='...' {...v} />
        ))}
      </div>
      {createChannel && <MenuItem href='/channel/create' icon={<HiPlusCircle />} name='Create channel' />}
    </div>
  );
};
