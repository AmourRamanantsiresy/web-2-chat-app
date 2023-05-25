import { ReactNode } from 'react';
import { useGlobalStore } from './useGlobalStore';

export const useModal = () => {
  const { modal, setModal } = useGlobalStore();

  const open = (content: ReactNode) => setModal({ content, isVisible: true });
  const close = () => setModal({ content: modal?.content || null, isVisible: false });

  return { close, open, modalState: modal || { isVisible: false, content: null } };
};
