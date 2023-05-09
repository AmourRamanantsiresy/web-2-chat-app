import { useFormContext } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  shouldValidate?: boolean;
  validate?: any;
};

const getInputId = (name: string) => `${name}-input-id`;

const getInputClass = (isError: boolean) =>
  `px-2 py-3 w-full text-gray-700 rounded-md border appearance-none focus:outline-blue-400 focus:border-blue-400 focus:shadow-blue-400 ${
    isError ? 'border-gray-200' : 'border-red-500'
  }`;

const getLabelClass = (isError: boolean) =>
  `block absolute transition-all -translate-y-1/2 translate-x-3 px-2 top-0 left-0 bg-white  text-xs ${
    isError ? 'text-gray-700' : 'text-red-500'
  }`;

export const Input = (props: InputProps) => {
  const { label, name, validate = undefined, shouldValidate = true } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <div className='relative pb-5 mb-2 w-80'>
      <label className={getLabelClass(!error)} htmlFor={getInputId(name)}>
        {label}
      </label>
      <input
        {...register(name, {
          validate,
          required:
            shouldValidate && !validate ? 'Ce champ est requis.' : false,
        })}
        className={getInputClass(!error)}
        placeholder={label}
        id={getInputId(name)}
      />
      {!!error && (
        <span className='absolute right-0 bottom-0 text-xs text-red-500'>
          {error.message as string}
        </span>
      )}
    </div>
  );
};
