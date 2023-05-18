import { useGlobalStore } from './useGlobalStore';

export const useSidebar = () => {
  const { sidebar, setSidebar } = useGlobalStore();

  const open = () => setSidebar(true);
  const close = () => setSidebar(false);
  const toggle = () => setSidebar(!sidebar);

  return { open, close, toggle, sidebarState: sidebar };
};
