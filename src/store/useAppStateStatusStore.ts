import { AppStateStatus } from "react-native";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppStateStatusStore {
  appStatusStatus: AppStateStatus;
  handleAppStateStatus: (newAppStateStatus: AppStateStatus) => void;
}

export const useAppStateStatusStore = create<AppStateStatusStore>((set) => ({
  appStatusStatus: "active",
  handleAppStateStatus: (newAppStateStatus: AppStateStatus) =>
    set({ appStatusStatus: newAppStateStatus }),
}));
