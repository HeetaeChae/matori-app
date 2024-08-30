import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "../constants/storageKeys";

interface LoginState {
  isLoggedIn: boolean | null;
  handleLoginState: (loginState: boolean) => void;
}

export const useLoginStateStore = create(
  persist<LoginState>(
    (set) => ({
      isLoggedIn: null,
      handleLoginState: (loginState: boolean): void =>
        set({ isLoggedIn: loginState }),
    }),
    {
      name: storageKeys.LOGIN_STATE_STORAGE,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
