import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import NotFound from '@pages/NotFound/NotFound';
import { type FC } from 'react';
import Header from '@components/Layout/Header/Header';
import styles from './App.module.scss';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/books" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp: FC = () => {
  return (
    <HashRouter>
      <div className={styles.container}>
        <Header />
        <App />
      </div>
    </HashRouter>
  );
};
