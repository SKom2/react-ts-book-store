import React from 'react';
import styles from './MoreBtn.module.scss';

const MoreBtn: React.FC = () => {
  return (
    <button type="button" className={styles.moreBtn}>
      <svg
        fill="#1c274d"
        height="35"
        width="35"
        aria-label="Vertical dots"
        role="img"
      >
        <circle cx="17.5" cy="5" r="3" />
        <circle cx="17.5" cy="17.5" r="3" style={{ opacity: '.5' }}/>
        <circle cx="17.5" cy="30" r="3" />
      </svg>
    </button>
  );
};

export default MoreBtn;
