import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  href?: string;
}

export const MenuButton = (props: MenuButtonProps) => {
  const { href, ...others } = props;
  return href ? (
    <Link href={href}>
      <MenuButtonSkeleton {...others} />
    </Link>
  ) : (
    <MenuButtonSkeleton {...props} />
  );
};

const MenuButtonSkeleton = (props: MenuButtonProps) => {
  const { label, onClick, className = '', icon, href } = props;
  return (
    <div
      onClick={onClick}
      className={`flex relative justify-center items-center p-9 my-3 mt-2 w-11/12 h-12 rounded shadow-sm cursor-pointer hover:bg-gray-100 transition-1 shadow-gray-200 ${className}`}
    >
      <div className='absolute left-2 top-1/2 -translate-y-1/2'>{icon}</div>
      <div className='flex justify-center items-center m-0 ml-4 h-12'>
        <p className='text-md'>{label}</p>
      </div>
    </div>
  );
};
