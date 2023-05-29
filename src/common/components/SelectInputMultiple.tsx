import { useCallback, useReducer, useState } from 'react';
import { LoadingIcon } from './icons';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MultipleSelectionReducerAction, MultipleSelectionReducerState, SelectInputMultipleProps } from '../types';

function MultipleSelectReducer<T extends MultipleSelectionReducerState>(
  { store, editable }: { store: T[]; editable: T[] },
  { payload, type }: MultipleSelectionReducerAction
) {
  switch (type) {
    case 'ADD':
      return { store, editable: [...editable, payload] };
    case 'EDIT':
      return { store, editable: [...editable.filter(e => e.id !== payload.id), payload] };
    case 'REMOVE':
      return { store, editable: editable.filter(e => e.id !== payload.id) };
    case 'INIT':
      return { store: payload, editable };
  }
}

export function SelectInputMultiple<T extends Record<string, any>>(props: SelectInputMultipleProps<T>) {
  const { options: optionsValue, renderName, isLoading: loading } = props;
  const isLoading = loading || !optionsValue;

  const [selected, select] = useState<T[]>([]);

  const [isOpen, open] = useState(false);

  const toggleInput = useCallback(() => open(e => !e), []);
  const handleSelect = useCallback((value: T) => {
    select(value);
    open(false);
  }, []);

  return (
    <div className='relative w-80'>
      <div className='w-80 rounded border-2 border-gray-200 cursor-pointer'>
        <div onClick={toggleInput} className='flex relative flex-wrap gap-2 justify-start p-3 w-80 hover:bg-gray-100'>
          {selected.map((e, k) => (
            <p className='p-2 m-2' key={`${k}-${e[renderName]}-multiple-select`}>
              {e[renderName]}
            </p>
          ))}
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
            optionsValue &&
            optionsValue.map((value, key) => {
              const name = value[renderName] as string;
              return (
                <div
                  onClick={() => handleSelect(value)}
                  key={name + key}
                  className='p-3 w-80 rounded-b hover:bg-gray-100'
                >
                  <p>{name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
