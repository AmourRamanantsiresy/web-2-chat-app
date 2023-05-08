import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCached } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  useEffect(() => {
    const user = getCached.user();
    if (pathname === null || pathname === '/') {
      if (user === null) {
        push('/signup');
      } else {
        push('/board');
      }
    } else if (
      pathname !== '/login' &&
      pathname !== '/signup' &&
      user === null
    ) {
      push('/signup');
    } else if (
      (pathname === '/login' || pathname === '/signup') &&
      user !== null
    ) {
      push('/board');
    }
  }, [pathname, push]);
};
