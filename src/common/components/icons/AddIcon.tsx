import { CreateIcon } from './CreateIcon';
import { IconProps } from '@/common/types';

export const AddIcon = (props: IconProps) => {
  const { color, width, background, onClick } = props;
  return (
    <CreateIcon sx={background} onClick={onClick}>
      <svg
        color={color}
        width={width}
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    </CreateIcon>
  );
};
