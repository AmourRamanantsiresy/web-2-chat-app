import { useModal } from '@/store';
import { ReactNode, useEffect } from 'react';

type Modal = {
  children: ReactNode;
  open: boolean;
};

export const Modal = (props: Modal) => {
  const { close, open: openModal } = useModal();
  const { children, open } = props;

  useEffect(() => {
    if (open) {
      openModal(
        <div
          style={{ minWidth: '5rem' }}
          className='overflow-hidden p-5 bg-white rounded-md shadow-lg shadow-indigo-100'
        >
          {children}
        </div>
      );
    } else {
      close();
    }
  }, [open]);

  return <div style={{ display: 'none' }}></div>;
};
