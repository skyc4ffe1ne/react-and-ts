import { createContext, use, useState } from "react";
import type { ToastProviderProps } from "../lib/types";

const ToastContext = createContext<undefined | ToastProviderProps>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<boolean>(false);

  const value = { setToast, toast };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = use(ToastContext);
  if (context === undefined) {
    throw new Error("useToast cannot be use outside of ToastProvider");
  }
  return context;
};
