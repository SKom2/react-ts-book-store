import React from 'react';
import styles from './Book.module.scss';

interface BookProps {
  bookImage: string;
  customBookClass?: string;
}

const Book: React.FC<BookProps> = ({ bookImage, customBookClass }) => {
  return (
    <div
      className={`${styles.book} ${customBookClass}`}
      style={{ backgroundImage: `url(${bookImage})` }}
    />
  );
};

Book.defaultProps = {
  customBookClass: '',
};

export default Book;
