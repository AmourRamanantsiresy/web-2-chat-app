import { DomainUser } from '@/common/types';

type Store = {
  user: DomainUser | null;
  errorMessage: string;
};

type Action = {
  setUser: (user: DomainUser) => void;
  setErrorMessage: (message: string) => void;
};

export type GlobalStore = Store & Action;
