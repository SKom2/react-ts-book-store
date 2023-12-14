import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from '@components/Layout/App/App';
import '@styles/_global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
