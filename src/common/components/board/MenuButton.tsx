import { ReactNode } from 'react';

interface MenuButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  icon?: ReactNode;
}

export const MenuButton = (props: MenuButtonProps) => {
  const { label, onClick, className = '', icon } = props;
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center p-9 my-3 mt-2 w-11/12 h-12 rounded shadow-md cursor-pointer shadow-gray-200 ${className}`}
    >
      {icon}
      <div className='flex justify-center items-center m-0 ml-4 h-12'>
        <p className='text-md'>{label}</p>
      </div>
    </div>
  );
};
