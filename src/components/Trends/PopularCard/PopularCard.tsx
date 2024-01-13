import React from 'react';
import styles from './PopularCard.module.scss';

interface PopularCardProps {
  cardName: string;
  cardTitle: string;
  cardSubtitle: string;
  children: React.ReactNode;
  cardInfoClass: string;
}

const PopularCard: React.FC<PopularCardProps> = ({
  cardTitle,
  cardSubtitle,
  cardName,
  children,
  cardInfoClass,
}) => {
  const content = typeof children === 'string' ? { __html: children } : null;
  return (
    <article className={styles.popularCard}>
      <p className={styles.popularCard__name}>{cardName}</p>
      <div className={`${styles.popularCard__info} ${cardInfoClass}`}>
        <h2 className={`${styles.popularCard__title}`}>{cardTitle}</h2>
        <p className={`${styles.popularCard__subtitle}`}>{cardSubtitle}</p>
        {content ? <div dangerouslySetInnerHTML={content} /> : children}
      </div>
    </article>
  );
};

export default PopularCard;
