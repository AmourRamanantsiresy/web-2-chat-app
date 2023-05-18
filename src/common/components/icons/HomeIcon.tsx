import { CreateIcon } from './CreateIcon';
import { IconProps } from '@/common/types';

export const HomeIcon = (props: IconProps) => {
  const { color, width, background, onClick } = props;
  return (
    <CreateIcon sx={background} onClick={onClick}>
      <svg
        color={color}
        width={width}
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path
          fill-rule='evenodd'
          d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
          clip-rule='evenodd'
        />
      </svg>
    </CreateIcon>
  );
};
