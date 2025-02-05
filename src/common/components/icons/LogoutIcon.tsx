import { CreateIcon } from './CreateIcon';
import { IconProps } from '@/common/types';

export const LogoutIcon = (props: IconProps) => {
  const { color, width, background, onClick } = props;
  return (
    <CreateIcon sx={background} onClick={onClick}>
      <svg
        color={color}
        width={width}
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
        />
      </svg>
    </CreateIcon>
  );
};
