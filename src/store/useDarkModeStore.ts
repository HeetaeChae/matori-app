import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create(
  persist<DarkModeState>(
    (set, get) => ({
      isDarkMode: false,
      toggleDarkMode: () => set({ isDarkMode: !get().isDarkMode }),
    }),
    {
      name: "dark-mode-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
