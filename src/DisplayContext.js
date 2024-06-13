import { createContext, useContext } from "react";

export const DisplayedDataContext = createContext(null);
export const SetDisplayedDataContext = createContext(null);

export function useDisplayedDataContext() {
  return useContext(DisplayedDataContext);
}

export function useSetDisplayedDataContext() {
  return useContext(SetDisplayedDataContext);
}

export const FilterContext = createContext(null);
export const SetFilterContext = createContext(null);

export function useFilterContext() {
  return useContext(FilterContext);
}

export function useSetFilterContext() {
  return useContext(SetFilterContext);
}
