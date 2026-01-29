import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import GlobalStateContextProvider from "./contexts/providers/GlobalStateContextProvider.tsx";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStateContextProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback as React.ComponentType<FallbackProps>}
      >
        <App />
      </ErrorBoundary>
    </GlobalStateContextProvider>
  </StrictMode>,
);
