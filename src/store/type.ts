import { DomainUser } from '@/common/types';
import { ReactNode } from 'react';

type Modal = {
  content: ReactNode | null;
  isVisible: boolean;
};

type Store = {
  user: DomainUser | null;
  errorMessage: string;
  sidebar: boolean;
  modal: Modal | null;
};

type Action = {
  setUser: (user: DomainUser) => void;
  setErrorMessage: (message: string) => void;
  setSidebar: (value: boolean) => void;
  setModal: (value: Modal) => void;
};

export type GlobalStore = Store & Action;
