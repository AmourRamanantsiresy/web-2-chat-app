import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.req.cookies);

  return {
    props: {}, // will be passed to the page component as props
  };
}

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
