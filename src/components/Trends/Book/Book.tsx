import React from 'react';
import styles from './Book.module.scss';

interface BookProps {
  bookImage: string;
}

const Book: React.FC<BookProps> = ({ bookImage }) => {
  return (
    <div
      className={styles.book}
      style={{ backgroundImage: `url(${bookImage})` }}
    />
  );
};

export default Book;
