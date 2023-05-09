import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCached } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 1500);
  }, [pathname, push]);
  return isLoading;
};
