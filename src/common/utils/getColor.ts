import { Variant } from '../types';

export const getColor = (variant: Variant) => {
  switch (variant) {
    case 'primary':
      return 'indigo';
    case 'secondary':
      return 'blue';
    case 'danger':
      return 'red';
    case 'info':
      return 'gray';
    case 'success':
      return 'green';
    case 'warning':
      return 'yellow';
    default:
      throw new Error(`The ${variant} is not a valid variant.`);
  }
};
