import { useSidebar } from '@/store';
import Link from 'next/link';
import { ReactElement, cloneElement } from 'react';

type MenuItemType = {
  name: string;
  lastMessage?: string;
  icon: ReactElement;
  onClick?: () => void;
  href?: string;
};

const _MenuItem = (props: MenuItemType) => {
  const { name, lastMessage, icon, onClick } = props;
  const { sidebarState } = useSidebar();
  return (
    <div
      onClick={onClick}
      className='flex justify-start items-center px-2 my-2 h-14 rounded cursor-pointer transition-1 w-fit hover:bg-indigo-200'
    >
      <div className='flex overflow-hidden justify-center items-center w-11 h-11 bg-transparent rounded-full border-2 border-indigo-500'>
        {cloneElement(icon, { className: 'text-indigo-500', size: '22px' })}
      </div>

      <div
        className={`m-0 ${
          sidebarState ? 'ml-5 w-52' : 'w-0'
        } flex flex-col justify-around transition-1 overflow-hidden h-12`}
      >
        {sidebarState && (
          <>
            <p className='text-sm font-bold'>{name}</p>
            {lastMessage && <p className='text-sm font-thin'>{lastMessage}...</p>}
          </>
        )}
      </div>
    </div>
  );
};

export const MenuItem = (props: MenuItemType) => {
  const { href, ...others } = props;
  return href ? (
    <Link href={href}>
      <_MenuItem {...others} />
    </Link>
  ) : (
    <_MenuItem {...others} />
  );
};
