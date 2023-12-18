import { type FC } from 'react';
import PageLinksList from '@components/Layout/Header/PageLinksList/PageLinksList';
import NavBar from '@components/Layout/Header/NavBar/NavBar';
import Logo from '@components/Layout/Header/Logo/Logo';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <PageLinksList />
      <NavBar />
    </header>
  );
};

export default Header;
