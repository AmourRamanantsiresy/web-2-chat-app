import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';
import { useModal } from '@/store';

type LayoutProps = {
  children: ReactNode | string;
};

type Redirection = {
  url: string;
  isAuthenticate: boolean;
};

export const Layout = (props: LayoutProps) => {
  useAuthenticate();
  const { modalState } = useModal();

  return (
    <>
      {props.children}
      <div
        className={`absolute left-1/2 transition-top -translate-x-1/2 ${
          modalState.isVisible ? 'slide-bottom-1' : 'slide-bottom-0'
        }`}
      >
        {modalState.content}
      </div>
    </>
  );
};
