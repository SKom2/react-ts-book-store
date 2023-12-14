import { type FC } from 'react';
import { menuItems } from '@data/headerData';
import MenuItem from '@components/Layout/Header/MenuItem/MenuItem';
import styles from './MenuItemList.module.scss';

const MenuItemList: FC = () => {
  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item.id}>
          <MenuItem path={item.path} icon={item.icon} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
};

export default MenuItemList;
