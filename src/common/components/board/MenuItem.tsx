import { useSidebar } from '@/store';

export const MenuItem = () => {
  const { sidebarState } = useSidebar();
  return (
    <div className='flex justify-start items-center px-2 my-2 h-14 rounded cursor-pointer transition-1 w-fit hover:bg-indigo-200'>
      <div className='w-11 h-11 bg-gray-100 rounded-full border-2 border-indigo-500'></div>

      <div className={`m-0 ${sidebarState ? 'ml-5 w-52' : 'w-0'} transition-1 overflow-hidden h-12`}>
        {sidebarState && (
          <>
            <p className='text-sm font-bold'>Name</p>
            <p className='text-sm font-thin'>last message...</p>
          </>
        )}
      </div>
    </div>
  );
};
