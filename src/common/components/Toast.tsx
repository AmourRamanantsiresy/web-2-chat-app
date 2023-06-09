import { Toast as ToastElement, ToastType } from '@/store';

type ToastProps = {
  toast: ToastElement;
};

const getToastStyle = (type: ToastType) => {
  switch (type) {
    case 'error':
      return 'bg-red-500 border border-red-300 text-white';
    case 'success':
      return 'bg-green-500 border border-green-300 text-white';
    case 'info':
      return 'bg-blue-500 border border-blue-300 text-white';
    case 'warning':
      return 'bg-yellow-500 border border-yellow-300 text-white';
  }
};

export const Toast = ({ toast }: ToastProps) => {
  const { content, isVisible, type } = toast;

  return (
    <div
      style={{
        minWidth: '400px',
        maxWidth: '500px',
        transitionTimingFunction: 'ease-in-out',
        transitionProperty: 'opacity, translate, bottom',
        transitionDuration: '500ms',
      }}
      className={`absolute shadow-md rounded-md p-4 right-4 ${getToastStyle(type)} ${
        isVisible ? 'bottom-12 opacity-1' : 'bottom-0 opacity-0 translate-y-full'
      }`}
    >
      {content}
    </div>
  );
};
