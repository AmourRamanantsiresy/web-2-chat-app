import { create } from 'zustand';
import { GlobalStore } from '.';
import { produce } from 'immer';

export const useGlobalStore = create<GlobalStore>()(set => ({
  setUser(user) {
    set(
      produce((state: GlobalStore) => {
        state.user = user;
      })
    );
  },
  setErrorMessage(message) {
    set(
      produce((state: GlobalStore) => {
        state.errorMessage = message;
      })
    );
  },
  setSidebar(value) {
    set(
      produce((state: GlobalStore) => {
        state.sidebar = value;
      })
    );
  },
  user: null,
  errorMessage: '',
  sidebar: true,
}));
