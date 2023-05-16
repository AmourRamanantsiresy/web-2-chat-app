export const MenuItem = () => {
  return (
    <div className='flex justify-start items-center px-2 my-2 w-full h-14 rounded cursor-pointer hover:bg-blue-200'>
      <div className='w-11 h-11 bg-gray-100 rounded-full'></div>
      <div className='m-0 ml-5 w-10/12 h-12'>
        <p className='text-sm font-bold'>Name</p>
        <p className='text-sm font-thin'>last message...</p>
      </div>
    </div>
  );
};
