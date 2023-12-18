import { createContext } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}
const WindowDimensionsContext = createContext<WindowDimensions>({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default WindowDimensionsContext;
