import { AppStateStatus } from "react-native";
import { create } from "zustand";

interface AppStateStatusStore {
  appStateStatus: AppStateStatus;
  handleAppStateStatus: (newAppStateStatus: AppStateStatus) => void;
}

export const useAppStateStatusStore = create<AppStateStatusStore>((set) => ({
  appStateStatus: "active",
  handleAppStateStatus: (newAppStateStatus: AppStateStatus) =>
    set({ appStateStatus: newAppStateStatus }),
}));
