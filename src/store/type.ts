import { DomainUser } from '@/common/types';

type Store = {
  user: DomainUser | null;
  errorMessage: string;
  sidebar: boolean;
};

type Action = {
  setUser: (user: DomainUser) => void;
  setErrorMessage: (message: string) => void;
  setSidebar: (value: boolean) => void;
};

export type GlobalStore = Store & Action;
