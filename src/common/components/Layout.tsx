import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';

type LayoutProps = {
  children: ReactNode | string;
};
export const Layout = (props: LayoutProps) => {
  const isLoading = useAuthenticate();

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center w-screen h-screen'>
          Loading ...
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
