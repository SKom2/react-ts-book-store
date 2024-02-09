import React from 'react';
import MenuItem, {
  type MenuItemProps,
} from '@components/Layout/Header/MenuItem/MenuItem';
import styles from './Menu.module.scss';

interface MenuProps {
  isActive: boolean;
  getItemStyle: (id: number) => React.CSSProperties;
  menuItems: MenuItemProps[];
}

const Menu: React.FC<MenuProps> = ({ isActive, getItemStyle, menuItems }) => {
  return (
    <ul
      className={`${styles.menuList} ${isActive ? styles.menuList_active : ''}`}
    >
      {menuItems.map((item, index) => (
        <li
          key={item.id}
          className={`${styles.menuList__item} ${
            isActive ? styles.menuList__item_active : ''
          }`}
          style={getItemStyle(index + 1)}
        >
          <MenuItem path={item.path} svg={item.svg} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
