import { CreateIcon } from './CreateIcon';
import { IconProps } from '@/common/types';

export const MenuThreeIcon = (props: IconProps) => {
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
          d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
          clip-rule='evenodd'
        />
      </svg>
    </CreateIcon>
  );
};
