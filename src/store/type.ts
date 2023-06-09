import { DomainUser } from '@/common/types';
import { ReactNode } from 'react';

type Modal = {
  content: ReactNode | null;
  isVisible: boolean;
};

export type ToastType = 'error' | 'success' | 'info' | 'warning';

export type Toast = {
  content: ReactNode | null;
  isVisible: boolean;
  type: ToastType;
};

type Store = {
  user: DomainUser | null;
  errorMessage: string;
  sidebar: boolean;
  modal: Modal | null;
  toast: Toast;
};

type Action = {
  setUser: (user: DomainUser) => void;
  setErrorMessage: (message: string) => void;
  setSidebar: (value: boolean) => void;
  setModal: (value: Modal) => void;
  setToast: (value: Toast) => void;
};

export type GlobalStore = Store & Action;
