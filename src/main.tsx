import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from '@components/Layout/App/App';
import '@styles/_global.scss';
import WindowDimensionsProvider from '@context/WindowDimensions/WindowDimensionsProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <WindowDimensionsProvider>
      <WrappedApp />
    </WindowDimensionsProvider>
  </React.StrictMode>
);
