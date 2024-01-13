import React from 'react';
import SearchInput from '@components/Trends/SearchInput/SearchInput';
import styles from './Explorer.module.scss';

const Explorer: React.FC = () => {
  return (
    <form className={styles.explorer}>
      <h1 className={styles.explorer__title}>New & Trending</h1>
      <p className={styles.explorer__subtitle}>
        Explore new worlds from authors
      </p>
      <SearchInput />
    </form>
  );
};

export default Explorer;
