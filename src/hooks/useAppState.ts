import { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

function useAppState() {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const [isComeback, setIsComeback] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        setIsComeback(true);
      }

      if (
        appState.current.match(/active/) &&
        (nextAppState === "inactive" || "background")
      ) {
        setIsComeback(false);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { isComeback };
}

export default useAppState;
