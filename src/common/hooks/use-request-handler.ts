import { useNotify } from '@/store';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

type ErrorData = {
  code: string;
  message: string;
  status: boolean;
  statusCode: number;
};

export const useRequestHandler = (request: (...args: any[]) => Promise<unknown>) => {
  const router = useRouter();
  const { notify } = useNotify();

  return async (...arg: Parameters<typeof request>): Promise<void> => {
    try {
      await request(...arg);
    } catch (err) {
      const error = err as AxiosError;
      if (error.status === 403) {
        router.push('/login');
      } else {
        const errorData = error.response?.data as ErrorData;
        notify(errorData.message, 'error');
      }
    }
  };
};
