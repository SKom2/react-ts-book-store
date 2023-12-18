import React, { useContext, useMemo } from 'react';
import WindowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext';
import styles from './Burger.module.scss';

interface BurgerIconProps {
  isActive: boolean;
  onClick: () => void;
}

// SVG path data as constants
const TOP_PATH =
  'm 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40';
const MIDDLE_PATH = 'm 30,50 h 40';
const BOTTOM_PATH =
  'm 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40';

const BurgerIcon: React.FC<BurgerIconProps> = ({ isActive, onClick }) => {
  const { width } = useContext(WindowDimensionsContext);

  const svgWidth = useMemo(() => {
    if (isActive) {
      return width <= 500 ? '40' : '50';
    }
    return '60';
  }, [isActive, width]);

  return (
    <button className={styles.burger} type="button" onClick={onClick}>
      <svg
        className={`${styles.ham} ${styles.hamRotate} ${
          isActive ? styles.active : ''
        }`}
        viewBox="0 0 100 100"
        width={svgWidth}
      >
        <path className={`${styles.line} ${styles.top}`} d={TOP_PATH} />
        <path className={`${styles.line} ${styles.middle}`} d={MIDDLE_PATH} />
        <path className={`${styles.line} ${styles.bottom}`} d={BOTTOM_PATH} />
      </svg>
    </button>
  );
};

export default BurgerIcon;
