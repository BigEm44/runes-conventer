import { useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "../exports/GlobalStateContext";

export default function GlobalStateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [number, setNumber] = useState("");
  const svgRef = useRef<SVGSVGElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const contextValue = { number, setNumber, svgRef, inputRef };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}
