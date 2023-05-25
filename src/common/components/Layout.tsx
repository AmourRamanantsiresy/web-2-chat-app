import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';
import { LoadingIcon } from './icons';
import { GetServerSideProps } from 'next';
import { getCached } from '../utils';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: ReactNode | string;
};

type Redirection = {
  url: string;
  isAuthenticate: boolean;
};

export const Layout = (props: LayoutProps) => {
  const isLoading = useAuthenticate();

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center w-screen h-screen'>
          <LoadingIcon background='bg-transparent' color='rgb(96,165,250)' width='4rem' />
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
