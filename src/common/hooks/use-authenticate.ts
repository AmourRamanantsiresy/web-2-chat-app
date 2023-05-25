import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCached } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const accessToken = getCached.accessToken();
    if (pathname === null || pathname === '/') {
      if (accessToken === null) {
        push('/login');
      } else {
        push('/board');
      }
    } else if (pathname !== '/login' && pathname !== '/signup' && accessToken === null) {
      push('/login');
    } else if ((pathname === '/login' || pathname === '/signup') && accessToken !== null) {
      push('/board');
    }
    setLoading(false);
  }, [pathname, push]);
  return isLoading;
};
