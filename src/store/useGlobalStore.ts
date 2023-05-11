import { create } from 'zustand';
import { GlobalStore } from './type';
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
  user: null,
  errorMessage: '',
}));
