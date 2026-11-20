import { createContext, useContext, useState, useEffect } from "react";
import { useIsMobile } from "../hook/useIsMobile";

interface IMenuContext {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  isMobile: boolean;
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [openMenu, setOpenMenu] = useState(!isMobile);

  useEffect(() => { setOpenMenu(!isMobile); }, [isMobile]);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu, isMobile }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}