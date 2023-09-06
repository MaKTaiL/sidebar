import { create } from "zustand";

interface SideBarStore {
  isOpen: boolean;
  toggleSideBar: () => void;
  setSideBar: (isOpen: boolean) => void;
}

export const useSmallSideBarStore = create<SideBarStore>()((set) => ({
  isOpen: false,
  toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSideBar: (isOpen: boolean) => set(() => ({ isOpen })),
}));

export const useLargeSideBarStore = create<SideBarStore>()((set) => ({
  isOpen: true,
  toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSideBar: (isOpen: boolean) => set(() => ({ isOpen })),
}));
