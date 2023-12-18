import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from '@components/Layout/App/App';
import '@styles/_global.scss';
import WindowDimensionsProvider from '@context/WindowDimensions/WindowDimensionsProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowDimensionsProvider>
      <WrappedApp />
    </WindowDimensionsProvider>
  </React.StrictMode>
);
