import React from 'react';
import styles from './Book.module.scss';

interface BookProps {
  bookImage: string;
  customBookClass?: string;
  isSliderBtn?: boolean;
}

const Book: React.FC<BookProps> = ({
  bookImage,
  customBookClass,
  isSliderBtn,
}) => {
  return (
    <div
      className={`${styles.book} ${customBookClass} ${
        isSliderBtn ? styles.book_rotated : ''
      }`}
      style={{ backgroundImage: `url(${bookImage})` }}
    />
  );
};

Book.defaultProps = {
  customBookClass: '',
  isSliderBtn: false,
};

export default Book;
