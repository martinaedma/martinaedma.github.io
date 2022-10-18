import create from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  view: string;
  showMenu: boolean;
  setView: (view: string) => void;
  setShowMenu: (status: boolean) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      view: "Etusivu",
      showMenu: false,
      setView: (view: string) => set({ view: view }),
      setShowMenu: (showMenu) => set({ showMenu: showMenu }),
    }),
    {
      name: "fxweb",
      getStorage: () => localStorage,
      partialize: (state) => ({
        view: state.view,
      }),
    }
  )
);
