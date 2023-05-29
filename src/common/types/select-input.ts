export interface SelectInputProps<T extends Record<string, any>> {
  defaultSelected?: T;
  options: T[];
  renderName: keyof T;
  isLoading?: boolean;
}
