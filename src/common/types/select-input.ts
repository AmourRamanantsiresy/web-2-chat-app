export interface SelectInputMultipleProps<T extends Record<string, any>> {
  options: T[];
  renderName: keyof T;
  isLoading?: boolean;
}

export interface SelectInputProps<T extends Record<string, any>> extends SelectInputMultipleProps<T> {
  defaultSelected?: T;
}

export type MultipleSelectionReducerState = { name: string; id: string };
export type MultipleSelectionReducerActionTypes = 'ADD' | 'REMOVE' | 'EDIT' | 'INIT';
export type MultipleSelectionReducerAction = {
  type: MultipleSelectionReducerActionTypes;
  payload: unknown & MultipleSelectionReducerState;
};
