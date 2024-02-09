import { type FC, type ReactNode, useMemo } from 'react';
import useWindowDimensions from '@hooks/useWindowDimensions';
import WindowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext';

interface WindowDimensionsProviderProps {
  children: ReactNode;
}

const WindowDimensionsProvider: FC<WindowDimensionsProviderProps> = ({
  children,
}) => {
  const dimensions = useWindowDimensions();

  const contextValue = useMemo(() => {
    return dimensions;
  }, [dimensions]);

  return (
    <WindowDimensionsContext.Provider value={contextValue}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};

export default WindowDimensionsProvider;
