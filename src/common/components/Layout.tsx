import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';

type LayoutProps = {
  children: ReactNode | string;
};
export const Layout = (props: LayoutProps) => {
  useAuthenticate();

  return <>{props.children}</>;
};
