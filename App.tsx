import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  useQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { AppState, AppStateStatus, Text, View } from "react-native";
import { ErrorBoundary } from "./src/components/ErrorBoundary";
import CustomButton from "./src/components/ui/CustomButton";
import ScreenContainer from "./src/components/ui/ScreenContainer";
import RootNavigator from "./src/navigations/RootNavigator";
import { useAppStateStatusStore } from "./src/store/useAppStateStatusStore";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

export default function App() {
  const { handleAppStateStatus, appStateStatus } = useAppStateStatusStore(
    (state) => state
  );

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      (nextAppState: AppStateStatus) => {
        handleAppStateStatus(nextAppState);
      }
    );

    return () => {
      subscription.remove();
    };
  }, [handleAppStateStatus]);

  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallback={({ error, onReset }) => {
              console.log("fallback", error);

              return (
                <ScreenContainer>
                  <Text>에러가 발생하였습니다.</Text>
                  <CustomButton onPress={onReset}>재시도</CustomButton>
                </ScreenContainer>
              );
            }}
          >
            <RootNavigator />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
