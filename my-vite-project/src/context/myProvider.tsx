import React, { ReactNode, useState } from "react";
import content from "../data/content.json";
import { ContextType } from "../types/contextType";
import DataType from "../types/dataType";

interface ProviderProps {
  children: ReactNode;
}

export const MyContext = React.createContext<ContextType | undefined>(
  undefined
);

export default function myProvider({ children }: ProviderProps) {
  const [data, setData] = useState<DataType[]>(content);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}
