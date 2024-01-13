import React, { useCallback, useContext, useState } from 'react';
import { menuItems } from '@data/headerData';
import WindowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext';
import Burger from '@components/Layout/Header/Burger/Burger';
import { Tablet } from '@data/windowDimensions';
import MoreBtn from '@components/Layout/Header/MoreBtn/MoreBtn';
import Menu from '@components/Layout/Header/Menu/Menu'; // Import the new Menu component
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const { width } = useContext(WindowDimensionsContext);
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setIsActive((prevIsActive) => !prevIsActive);
  }, []);

  const getItemStyle = (id: number): React.CSSProperties => {
    if (width <= Tablet && isActive) {
      return { transform: 'translateY(0)' };
    }
    if (width <= Tablet) {
      return { transform: `translateY(${-60 * id}px)` };
    }
    return {};
  };

  return (
    <nav className={styles.navBar}>
      {width > Tablet && (
        <Menu
          isActive={isActive}
          getItemStyle={getItemStyle}
          menuItems={menuItems}
        />
      )}
      {width > Tablet && <MoreBtn />}
      {width <= Tablet && <MoreBtn />}
      {width <= Tablet && (
        <div className={styles.burgerMenu}>
          <Burger isActive={isActive} onClick={handleBurgerClick} />
          <Menu
            isActive={isActive}
            getItemStyle={getItemStyle}
            menuItems={menuItems}
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
