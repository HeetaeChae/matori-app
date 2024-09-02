import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { storageKeys } from "../constants/storageKeys";
import { useLoginStateStore } from "../store/useLoginStateStore";

function useLoginState() {
  const { isLoggedIn, handleLoginState } = useLoginStateStore((state) => state);

  useEffect(() => {
    (async () => {
      const storedLoginState = await AsyncStorage.getItem(
        storageKeys.LOGIN_STATE_STORAGE
      );
      if (storedLoginState) {
        const { state } = JSON.parse(storedLoginState);
        handleLoginState(state.isLoggedIn);
      } else {
        handleLoginState(false);
      }
    })();
  }, []);

  return isLoggedIn;
}

export default useLoginState;
