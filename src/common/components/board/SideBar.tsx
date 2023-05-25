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
        <div style={{ width: '30rem' }} className=''>
          <div className='px-1 pb-1 mb-3 w-full border-b'>
            <p className='text-base'>Add new channel.</p>
          </div>
          <div>
            <p className='p-2 bg-gray-100'>Here, I will implement the channel creation form.</p>
          </div>
          <div className='flex justify-end items-end mt-3 w-full'>
            <Button label='close' onClick={closeChannelModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
