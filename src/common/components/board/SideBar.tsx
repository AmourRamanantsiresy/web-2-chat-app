import { MenuButton, MenuItem } from '.';
import { AddIcon } from '../icons';

export const SideBar = () => {
  return (
    <div className='relative p-4 h-full bg-gray-100 transition-1 w-fit'>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuButton
        className='absolute bottom-1 left-1/2 -translate-x-1/2'
        icon={<AddIcon background='bg-indigo-500' color='rgb(79,70,229)' width='30px' />}
        label='Add channel'
        onClick={() => prompt('Your channel name')}
      />
    </div>
  );
};
