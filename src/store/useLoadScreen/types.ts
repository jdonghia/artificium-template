import { ReactNode } from "react";

interface ContextProps {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export type { ContextProps, ProviderProps };
