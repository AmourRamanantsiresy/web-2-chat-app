import { ButtonProps, ButtonVariant } from '../types';
import { getColor } from '../utils';

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', label, icon, ...others } = props;

  const color = getColor(variant);
  const buttonColor = `bg-${color}-500 hover:bg-${color}-600`;

  return (
    <div className='relative w-fit'>
      <button
        className={`relative px-6 py-2 ${icon && 'pr-12'} m-2 text-white rounded ${className} ${buttonColor} `}
        {...others}
      >
        {label}
      </button>
      <div className='absolute right-2 top-1/2 -translate-y-1/2'>{icon}</div>
    </div>
  );
};
