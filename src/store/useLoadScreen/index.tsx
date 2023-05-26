import { createContext, useState, useContext, useMemo } from "react";
import { Logo } from "src/components/svgs";
import { LoadScreenWrapper } from "./style";
import { ContextProps, ProviderProps } from "./types";

const LoadScreenContext = createContext<ContextProps>({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

function LoadScreen(): JSX.Element {
  return (
    <LoadScreenWrapper>
      <Logo size={2} />
    </LoadScreenWrapper>
  );
}

function LoadScreenProvider({ children }: ProviderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoading = (): void => {
    setIsLoading(true);
  };

  const hideLoading = (): void => {
    setIsLoading(false);
  };

  const value: ContextProps = useMemo(
    () => ({ isLoading, showLoading, hideLoading }),
    [isLoading]
  );

  return (
    <LoadScreenContext.Provider value={value}>
      {isLoading && <LoadScreen />}
      {children}
    </LoadScreenContext.Provider>
  );
}

const useLoading = (): ContextProps => useContext(LoadScreenContext);

export { useLoading, LoadScreenProvider };
