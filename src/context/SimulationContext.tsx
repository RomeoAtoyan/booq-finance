/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface SimulationContextType {
  isErrorMode: boolean;
  isLoadingMode: boolean;
  toggleErrorMode: () => void;
  toggleLoadingMode: () => void;
}

const SimulationContext = createContext<SimulationContextType | undefined>(
  undefined,
);

export const SimulationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isErrorMode, setIsErrorMode] = useState(false);
  const [isLoadingMode, setIsLoadingMode] = useState(false);

  const toggleErrorMode = () => setIsErrorMode((prev) => !prev);
  const toggleLoadingMode = () => setIsLoadingMode((prev) => !prev);

  return (
    <SimulationContext.Provider
      value={{ isErrorMode, isLoadingMode, toggleErrorMode, toggleLoadingMode }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error("useSimulation must be used within a SimulationProvider");
  }
  return context;
};
