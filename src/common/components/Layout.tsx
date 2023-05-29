import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';
import { useModal } from '@/store';

type LayoutProps = {
  children: ReactNode | string;
};

export const Layout = (props: LayoutProps) => {
  useAuthenticate();
  const { modalState } = useModal();

  return (
    <>
      {props.children}
      <div
        style={modalState && !modalState.isVisible ? { display: 'none' } : {}}
        className='absolute top-0 left-0 w-screen h-screen bg-black opacity-50'
      ></div>
      <div
        className={`absolute left-1/2 transition-top -translate-x-1/2 -translate-y-2/3 ${
          modalState.isVisible ? 'slide-bottom-1' : 'slide-bottom-0'
        }`}
      >
        {modalState.content}
      </div>
    </>
  );
};
