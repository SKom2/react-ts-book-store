import React from 'react';
import BooksList from '@components/BookStore/BooksList/BooksList';
import styles from './BookStore.module.scss';

const BookStore: React.FC = () => {
  return (
    <section className={styles.bookStore}>
      <div className={styles.bookStore__container}>
        <p className={styles.bookStore__title}>Recent Bestsellers</p>
        <BooksList />
      </div>
    </section>
  );
};

export default BookStore;
