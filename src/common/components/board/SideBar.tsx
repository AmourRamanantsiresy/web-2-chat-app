import { HiPlusCircle, HiUserGroup } from 'react-icons/hi';
import { MenuButton, MenuItem } from '.';
import { AddIcon } from '../icons';

export const SideBar = () => {
  return (
    <div className='relative p-4 h-full bg-gray-100 transition-1 w-fit'>
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiPlusCircle />} name='Add channel' />
    </div>
  );
};
