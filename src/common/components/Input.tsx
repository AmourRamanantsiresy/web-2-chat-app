import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';

const getInputId = (name: string) => `${name}-input-id`;

const getInputClass = (isError: boolean) =>
  `px-2 py-3 w-full text-gray-700 rounded-md border appearance-none focus:outline-blue-400 focus:border-blue-400 focus:shadow-blue-400 ${
    isError ? 'border-gray-200' : 'border-red-500'
  }`;

export const Input = (props: InputProps) => {
  const { label, name, validate, type } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <div className='relative pb-5 mb-2 w-80'>
      <input
        type={type}
        {...register(name, { validate })}
        className={getInputClass(!error)}
        placeholder={label}
        id={getInputId(name)}
      />
      {!!error && <span className='absolute right-0 bottom-0 text-xs text-red-500'>{error.message as string}</span>}
    </div>
  );
};
