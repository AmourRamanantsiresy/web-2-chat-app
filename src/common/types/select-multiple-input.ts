export interface SelectMultipleInputProps<T extends Record<string, any>> {
  options: T[];
  renderName: keyof T;
  isLoading?: boolean;
  renderRef?: keyof T;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  onChange: (value: T[]) => void;
}
