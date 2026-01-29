import { useRef, useState } from "react";
import { GlobalStateContext } from "../exports/GlobalStateContext";

export default function GlobalStateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [number, setNumber] = useState("");
  const svgRef = useRef<SVGSVGElement>(null!);

  const contextValue = { number, setNumber, svgRef };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}
