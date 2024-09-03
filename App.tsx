import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  useQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { AppState, AppStateStatus, Text, View } from "react-native";
import { ErrorBoundary } from "./src/components/ErrorBoundary";
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
  const { handleAppStateStatus, appStatusStatus } = useAppStateStatusStore(
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
                <View style={{ margin: 50 }}>
                  <Text>dddddddddddddddd</Text>
                </View>
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
