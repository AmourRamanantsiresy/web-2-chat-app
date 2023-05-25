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
  useAuthenticate();

  return <>{props.children}</>;
};
