import { HiPlusCircle, HiUserGroup } from 'react-icons/hi';
import { MenuItem } from '.';
import { useState } from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';

export const SideBar = () => {
  const [channelModal, setChannelModal] = useState(false);

  const openChannelModal = () => setChannelModal(true);
  const closeChannelModal = () => setChannelModal(false);

  return (
    <div className='relative p-4 h-full bg-gray-100 transition-1 w-fit'>
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem icon={<HiUserGroup />} lastMessage='this is the last' name='Name' />
      <MenuItem onClick={openChannelModal} icon={<HiPlusCircle />} name='Add channel' />

      <Modal open={channelModal}>
        <div>this is the best</div>
        <Button label='close' onClick={closeChannelModal} />
      </Modal>
    </div>
  );
};
