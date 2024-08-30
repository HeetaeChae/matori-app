import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "../constants/storageKeys";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create(
  persist<DarkModeState>(
    (set, get) => ({
      isDarkMode: false,
      toggleDarkMode: (): void => set({ isDarkMode: !get().isDarkMode }),
    }),
    {
      name: storageKeys.DARK_MODE_STORAGE,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
