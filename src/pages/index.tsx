import { Layout } from '@/common/components';
import { withAuth } from '@/common/utils';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await withAuth(context);
}

export default function Home() {
  return <div></div>;
}
