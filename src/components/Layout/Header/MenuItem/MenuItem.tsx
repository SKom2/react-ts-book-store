import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  path: string;
  icon: string;
  alt: string;
}

const MenuItem: FC<MenuItemProps> = ({ path, icon, alt }) => {
  return (
    <Link to={path} className={styles.menuLink}>
      <img src={icon} alt={alt} className={styles.menuLink_icon} />
    </Link>
  );
};

export default MenuItem;
