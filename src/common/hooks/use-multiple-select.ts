import { useCallback, useState } from 'react';

type State<T> = {
  toSelect: T[];
  selected: T[];
};

type ActionType = 'SELECT' | 'UNSELECT' | 'INIT';

type UseMultipleSelectReturn<T> = [State<T>, (action: ActionType, payload: T | T[]) => void];

export function useMultipleSelect<T extends Record<string, any>>(ref: keyof T, defaultToSelect?: T[]) {
  const [{ toSelect, selected }, setState] = useState<State<T>>({ toSelect: defaultToSelect || [], selected: [] });

  const dispatcher = (action: ActionType, payload: T | T[]) => {
    if (action === 'INIT' && Array.isArray(payload)) {
      setState({ toSelect: payload, selected: [] });
    } else if (action === 'SELECT' && !Array.isArray(payload)) {
      setState({
        selected: [...selected, payload],
        toSelect: toSelect.filter(e => e[ref] !== payload[ref]),
      });
    } else if (action === 'UNSELECT' && !Array.isArray(payload)) {
      setState({
        selected: selected.filter(e => e[ref] !== payload[ref]),
        toSelect: [...toSelect, payload],
      });
    }
  };

  return [{ toSelect, selected }, dispatcher] as UseMultipleSelectReturn<T>;
}
