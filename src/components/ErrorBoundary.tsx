import { AxiosError } from "axios";
import React, { Component, ComponentType, ReactNode } from "react";

interface ErrorOrNull {
  error: AxiosError | null;
}

interface FallbackProps extends ErrorOrNull {
  onReset: () => void;
}

interface Props {
  children: ReactNode;
  fallback: ComponentType<FallbackProps>;
  onReset: () => void;
}

interface State extends ErrorOrNull {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: AxiosError): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: AxiosError): void {
    console.error("errorInErrorBoundary", error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <this.props.fallback
          error={this.state.error}
          onReset={this.props.onReset}
        />
      );
    }

    return this.props.children;
  }
}
