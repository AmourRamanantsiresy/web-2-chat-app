import { ReactNode } from 'react';

interface CreateIconProps {
  sx: string;
  children: ReactNode;
  onClick?: () => void;
}

export const CreateIcon = (props: CreateIconProps) => {
  const { sx, children, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`flex justify-center p-2 m-1 bg-opacity-0 rounded-full transition-all cursor-pointer item-center hover:bg-opacity-30 ${sx}`}
    >
      {children}
    </div>
  );
};
