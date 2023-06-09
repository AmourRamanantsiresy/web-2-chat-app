import { GetServerSidePropsContext } from 'next';
import { cookies } from './cookies';
import { User } from '../types';
import { UserProvider } from '@/providers';

export const withAuth = async (context: GetServerSidePropsContext) => {
  let user = cookies.getUser(context?.req?.cookies) as User;
  const accessToken = cookies.getAccessToken(context?.req?.cookies) as string;

  if (context.req.url?.includes('/login') && !accessToken) {
    return { props: {} };
  }

  if (!accessToken) {
    return {
      redirect: {
        permanent: true,
        destination: '/login',
      },
    };
  }

  if (accessToken && !user) {
    try {
      const userApi = UserProvider.api(accessToken);
      const fetchedUser = await userApi.getOne();
      if (fetchedUser) {
        user = fetchedUser;
      }
    } catch {
      return {
        redirect: {
          permanent: true,
          destination: '/login',
        },
      };
    }
  }

  const redirect = (context.req.url?.includes('/login') || context.req.url?.length === 1) && {
    permanent: true,
    destination: '/profile',
  };

  console.log(user);

  return {
    props: {
      user: user as User,
    },
    redirect,
  };
};
