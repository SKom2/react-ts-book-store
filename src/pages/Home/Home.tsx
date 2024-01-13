import React, { type FC } from 'react';
import Shelf from '@components/Shelf/Shelf';
import styles from './Home.module.scss';
import Trends from '../../containers/Trends/Trends';

const Home: FC = () => {
  return (
    <main className={styles.home}>
      <Trends />
      <Shelf />
    </main>
  );
};

export default Home;
