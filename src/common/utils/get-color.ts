import { Variant } from '../types';

export const getButtonBg = (variant: Variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-500 hover:bg-indigo-600';
    case 'secondary':
      return 'bg-purple-400 hover:bg-purple-500';
    case 'danger':
      return 'bg-red-500 hover:bg-red-600';
    case 'info':
      return 'bg-gray-500 hover:bg-gray-600';
    case 'success':
      return 'bg-green-500 hover:bg-green-600';
    case 'warning':
      return 'bg-yellow-500 hover:bg-yellow-600';
    default:
      throw new Error(`The ${variant} is not a valid variant.`);
  }
};
