import React from 'react';
import PopularCard from '@components/Trends/PopularCard/PopularCard';
import Stephen from '@images/Stephen.png';
import AudioBook from '@components/Trends/AudioBook/AudioBook';
import styles from './Popular.module.scss';

const Popular: React.FC = () => {
  return (
    <div className={styles.popular}>
      <PopularCard
        cardInfoClass={styles.firstCardInfo}
        cardName="Author of the week"
        cardTitle="Stephen King Collection"
        cardSubtitle="78 books"
      >
        <img
          alt="Stephen King"
          src={Stephen}
          className={styles.popularCard__image}
        />
      </PopularCard>
      <PopularCard
        cardInfoClass={styles.secondCardInfo}
        cardName="Last Listened"
        cardTitle="False Witness: A Novel"
        cardSubtitle="Karin Slaughter"
      >
        <AudioBook />
      </PopularCard>
    </div>
  );
};

export default Popular;
