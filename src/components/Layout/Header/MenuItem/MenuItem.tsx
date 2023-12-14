import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  path: string;
  svg: string;
}

const MenuItem: FC<MenuItemProps> = ({ path, svg }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.menuLink} ${styles.menuLink_active}`
          : styles.menuLink
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.menuLink__icon}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </NavLink>
  );
};

export default MenuItem;
