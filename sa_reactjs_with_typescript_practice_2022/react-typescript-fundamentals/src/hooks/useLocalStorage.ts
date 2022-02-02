import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value || "");
    } catch {
      return initialValue;
    }
  }); // state humari generic type ki hogi

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [state]);

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {}
  };

  return [state, setState, remove]; // note defined return for all of tehse
};
