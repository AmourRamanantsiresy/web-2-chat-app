import { useMemo } from 'react';
import { ButtonProps } from '../types';
import { getButtonBg } from '../utils';
import Link from 'next/link';

export const _Button = (props: ButtonProps) => {
  const { className, variant = 'primary', label, icon, disabled, ...others } = props;

  const buttonColor = useMemo(() => getButtonBg(variant), [variant]);
  const disableButtonColor = useMemo(() => 'bg-gray-300', []);

  return (
    <div className='relative w-fit'>
      <button
        disabled={disabled}
        className={`relative px-6 py-2 ${icon && 'pl-12'} m-2 text-white  rounded ${
          disabled ? disableButtonColor : buttonColor
        } ${className} `}
        {...others}
      >
        {label}
      </button>
      <div className='absolute left-2 top-1/2 -translate-y-1/2'>{icon}</div>
    </div>
  );
};

export const Button = (props: ButtonProps) => {
  const { href, disabled, ...others } = props;

  return href && !disabled ? (
    <Link href={href}>{<_Button {...others} />}</Link>
  ) : (
    <_Button {...others} disabled={disabled} />
  );
};
