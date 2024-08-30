import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  useQuery,
} from "@tanstack/react-query";
import { Text, View } from "react-native";
import { ErrorBoundary } from "./src/components/ErrorBoundary";
import RootNavigator from "./src/navigations/RootNavigator";

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
