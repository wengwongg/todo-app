import { createContext, useContext } from "react";

export const DataContext = createContext(null);
export const SetDataContext = createContext(null);

export function useDataContext() {
  return useContext(DataContext);
}

export function useSetDataContext() {
  return useContext(SetDataContext);
}
