import React, { useContext, useState } from 'react';
import productCards from '@data/sliderData.ts';
import BookCard from '@components/BookStore/BookCard/BookCard';
import styles from './BooksList.module.scss';
import windowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext.tsx';

interface ProductCard {
  id: number;
  cover: string;
  rating: number;
  name: string;
  author: string;
}

const BooksList: React.FC = () => {
  const [productCardsArr, setProductCardsArr] =
    useState<ProductCard[]>(productCards);
  const [moving, setMoving] = useState<boolean>(false);
  const { width } = useContext(windowDimensionsContext);
  const isSliderBtn = (index: number): boolean => {
    if (width > 1850) {
      return (index + 1) % 5 === 0;
    }
    return (index + 1) % 4 === 0;
  };
  const handleBtnClick = (): void => {
    setMoving(true);
    setTimeout(() => {
      setProductCardsArr((prevCards) => [
        ...prevCards.slice(3),
        ...prevCards.slice(0, 3),
      ]);
      setMoving(false);
    }, 1000);
  };
  return (
    <div className={styles.bookList}>
      <ul className={styles.bookList__container}>
        {productCardsArr.map((card, index) => (
          <li key={card.id} className={`${moving ? styles.moving : ''}`}>
            <BookCard
              isMoving={moving}
              onClick={!isSliderBtn(index) ? undefined : handleBtnClick}
              isSliderBtn={isSliderBtn(index)}
              cover={card.cover}
              name={card.name}
              stars={card.rating}
              author={card.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
