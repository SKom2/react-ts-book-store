import React from 'react';
import Explorer from '@components/Trends/Explorer/Explorer';
import BookImage from '@images/book2.png';
import Book from '@components/Trends/Book/Book';
import Popular from '@components/Trends/Popular/Popular';
import styles from './Trends.module.scss';

const Trends: React.FC = () => {
  return (
    <section className={styles.trends}>
      <div className={styles.trends__container}>
        <Explorer />
        <Book bookImage={BookImage} customBookClass={styles.trends__book}/>
        <Popular />
      </div>
    </section>
  );
};

export default Trends;
