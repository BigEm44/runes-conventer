import { createContext } from "react";

type GlobalStateContextProps = {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  svgRef: React.RefObject<SVGSVGElement>;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const GlobalStateContext = createContext<GlobalStateContextProps | null>(
  null,
);
