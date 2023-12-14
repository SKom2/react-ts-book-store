import { type FC } from 'react';
import Logo from '@images/time-life-books.svg';
import PageLinksList from '@components/Layout/Header/PageLinksList/PageLinksList';
import MenuItemList from '@components/Layout/Header/MenuItemList/MenuItemList';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Header Logo" className={styles.header__logo} />
      <PageLinksList />
      <MenuItemList />
    </header>
  );
};

export default Header;
