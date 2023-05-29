import { useCallback, useEffect, useState } from 'react';
import { LoadingIcon } from './icons';
import { HiChevronDown, HiChevronUp, HiXCircle } from 'react-icons/hi';
import { SelectMultipleInputProps } from '../types';
import { useMultipleSelect } from '../hooks';

type SelectedItemsProps<T> = {
  label: string;
  onUnselect: () => void;
};

function SelectedItems<T>(props: SelectedItemsProps<T>) {
  const { onUnselect, label } = props;

  const handleClick = (e: any) => {
    e.stopPropagation();
    onUnselect();
  };

  return (
    <div className='flex justify-between items-center px-2 py-1 bg-gray-100 rounded-lg w-fit'>
      <p>{label}</p>
      <HiXCircle className='ml-2 text-indigo-500' size='20px' onClick={handleClick} />
    </div>
  );
}

export function SelectMultipleInput<T extends Record<string, any>>(props: SelectMultipleInputProps<T>) {
  const {
    options: optionsValue,
    renderName,
    isLoading: loading,
    renderRef,
    label,
    errorMessage,
    isError = false,
    onChange: handleChange,
  } = props;
  const [{ selected, toSelect }, dispatcher] = useMultipleSelect<T>(renderRef || renderName, optionsValue);
  const [isOpen, open] = useState(false);
  const toggleInput = useCallback(() => open(e => !e), []);
  const isLoading = loading || !optionsValue;

  useEffect(() => {
    handleChange(selected);
  }, [selected]);

  return (
    <div className='relative w-80'>
      <div className='w-80 rounded border-2 border-gray-200 cursor-pointer'>
        <div onClick={toggleInput} className='relative p-2 w-80 hover:bg-gray-50'>
          <div className='flex flex-wrap gap-2 justify-start w-72'>
            {selected.map((value, k) => (
              <SelectedItems<T>
                label={value[renderName]}
                onUnselect={() => dispatcher('UNSELECT', value)}
                key={`${value[renderName]}-${k}-selected-items`}
              />
            ))}
            {selected.length === 0 && <p className='p-1 text-gray-400'>{label}</p>}
          </div>
          <div className='absolute right-2 top-1/2 -translate-y-1/2'>
            {!isOpen ? <HiChevronDown /> : <HiChevronUp />}
          </div>
        </div>
        <div className='absolute bottom-0 left-0 z-50 bg-white rounded-b translate-y-full'>
          {isOpen && isLoading && (
            <div className='flex justify-center items-center px-3 w-80 bg-gray-100 border-2 border-gray-100'>
              <LoadingIcon background='bg-indigo-500' color='rgb(99,102,241)' width='20px' />
            </div>
          )}
          {isOpen &&
            !isLoading &&
            toSelect &&
            toSelect.map((value, key) => {
              const name = value[renderName] as string;
              return (
                <div
                  onClick={() => dispatcher('SELECT', value)}
                  key={name + key}
                  className='p-3 w-80 rounded-b hover:bg-gray-100'
                >
                  <p>{name}</p>
                </div>
              );
            })}
          {isOpen && !isLoading && toSelect && toSelect.length === 0 && (
            <div className='flex justify-center items-center p-3 w-80 bg-gray-50 rounded-b'>
              <p>No value</p>
            </div>
          )}
        </div>
      </div>
      {isError && (
        <div className='relative'>
          <p className='absolute right-0 text-red-500 text-end'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
