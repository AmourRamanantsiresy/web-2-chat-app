import { useGlobalStore } from './useGlobalStore';
import { ToastType } from './type';

export const useNotify = () => {
  const { toast, setToast } = useGlobalStore();

  const notify = (message: string, type: ToastType, timeout?: number) => {
    setToast({
      content: message,
      isVisible: true,
      type,
    });
    const timeoutId = setTimeout(() => {
      setToast({ ...toast, isVisible: false });
      clearTimeout(timeoutId);
    }, timeout || 3_000);
  };

  return {
    notify,
    toast,
  };
};
