import React from 'react';
import Book from '@components/Trends/Book/Book';
import styles from './BookCard.module.scss';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} height="20" width="20" data-rating={rating}>
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{ fill: i < rating ? 'gold' : 'grey' }}
          />
        </svg>
      ))}
    </>
  );
};

interface BookCardTypes {
  cover: string;
  stars: number;
  name: string;
  author: string;
  isSliderBtn?: boolean;
  onClick?: () => void;
  isMoving?: boolean;
}

const BookCard: React.FC<BookCardTypes> = ({
  isSliderBtn,
  cover,
  stars,
  name,
  author,
  onClick,
  isMoving,
}) => {
  const getBtnClass = (): string => {
    if (isSliderBtn) {
      return isMoving ? styles.bookCard__btn_moving : styles.bookCard__btn;
    }
    return '';
  };
  const btnClass = `${styles.bookCard__cover} ${getBtnClass()}`;

  return (
    <article className={styles.bookCard} onClick={onClick}>
      <Book
        bookImage={cover}
        customBookClass={btnClass}
        isSliderBtn={isSliderBtn}
      />
      <div className={`${styles.bookCard__info}`}>
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

BookCard.defaultProps = {
  isSliderBtn: false,
  onClick: () => {},
  isMoving: false,
};

export default BookCard;
