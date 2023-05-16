import { ButtonProps, ButtonVariant } from '../types';

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', label, ...others } = props;

  return (
    <button className={`px-6 py-2 m-2 text-white rounded ${className} ${getButtonVariant(variant)}`} {...others}>
      {label}
    </button>
  );
};

const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-green-400 hover:bg-green-500';
    case 'secondary':
      return 'bg-blue-400 hover:bg-blue-500';
    case 'danger':
      return 'bg-red-400 hover:bg-red-500';
    default:
      throw new Error(`The ${variant} is not a valid variant.`);
  }
};
