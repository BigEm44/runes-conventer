import { useContext } from "react";
import { GlobalStateContext } from "../contexts/exports/GlobalStateContext";

export function useGlobalStateContext() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateContextProvider",
    );
  }

  return context;
}
