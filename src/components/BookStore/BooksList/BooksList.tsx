import React from 'react';
import productCards from '@data/sliderData';
import BookCard from '@components/BookStore/BookCard/BookCard';
import styles from './BooksList.module.scss';

const BooksList: React.FC = () => {
  return (
    <ul className={styles.bookList}>
      {productCards.map((card) => (
        <li key={card.id}>
          <BookCard
            cover={card.cover}
            name={card.name}
            stars={card.rating}
            author={card.author}
          />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
