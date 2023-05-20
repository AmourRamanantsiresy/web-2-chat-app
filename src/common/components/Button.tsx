import { useMemo } from 'react';
import { ButtonProps } from '../types';
import { getButtonBg } from '../utils';

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', label, icon, ...others } = props;

  const buttonColor = useMemo(() => getButtonBg(variant), [variant]);

  return (
    <div className='relative w-fit'>
      <button
        className={`relative px-6 py-2 ${icon && 'pr-12'} m-2 text-white rounded ${buttonColor} ${className} `}
        {...others}
      >
        {label}
      </button>
      <div className='absolute right-2 top-1/2 -translate-y-1/2'>{icon}</div>
    </div>
  );
};
