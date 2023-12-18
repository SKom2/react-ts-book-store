import { type FC, useMemo } from 'react';
import useWindowDimensions from '@hooks/useWindowDimensions';
import WindowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext';

const WindowDimensionsProvider: FC = ({ children }) => {
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
