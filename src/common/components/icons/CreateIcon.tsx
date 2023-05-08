import { ReactNode } from 'react';

interface CreateIconProps {
  sx: string;
  children: ReactNode;
}

export const CreateIcon = (props: CreateIconProps) => {
  const { sx, children } = props;
  return (
    <div
      className={`flex justify-center p-2 m-1 bg-opacity-20 rounded-full transition-all item-center hover:bg-opacity-30 ${sx}`}
    >
      {children}
    </div>
  );
};
