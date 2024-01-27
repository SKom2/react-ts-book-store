import React from 'react';
import Book from '@components/Trends/Book/Book';
import styles from './BookCard.module.scss';

interface BookCardTypes {
  cover: string;
  stars: number;
  name: string;
  author: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} height="20" width="20" data-rating={rating}>
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fill: i < rating ? 'gold' : 'grey' }} // Закрашиваем золотом, если индекс меньше рейтинга
          />
        </svg>
      ))}
    </>
  );
};

const BookCard: React.FC<BookCardTypes> = ({ cover, stars, name, author }) => {
  return (
    <article className={styles.bookCard}>
      <Book bookImage={cover} customBookClass={styles.bookCard__cover} />
      <div className={styles.bookCard__info}>
        <div className={styles.bookCard__headingInfo}>
          <p className={styles.bookCard__rate}>
            <StarRating rating={stars} />
          </p>
          <p className={styles.bookCard__name}>{name}</p>
          <p className={styles.bookCard__author}>{author}</p>
        </div>
        <button type="button" className={styles.bookCard__buyBtn}>
          Buy now
        </button>
      </div>
    </article>
  );
};

export default BookCard;
