import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';
import { LoadingIcon } from './icons';

type LayoutProps = {
  children: ReactNode | string;
};
export const Layout = (props: LayoutProps) => {
  const isLoading = useAuthenticate();

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center w-screen h-screen'>
          <LoadingIcon
            background='bg-transparent'
            color='rgb(96,165,250)'
            width='4rem'
          />
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
