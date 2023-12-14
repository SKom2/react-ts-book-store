import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageLink.module.scss';

interface PageLinkProps {
  path: string;
  icon: string;
  alt: string;
  title: string;
}

const PageLink: FC<PageLinkProps> = ({ path, icon, alt, title }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.pageLink} ${styles.pageLink_active}`
          : styles.pageLink
      }
    >
      <img src={icon} alt={alt} className={styles.pageLink_icon} />
      {title}
    </NavLink>
  );
};

export default PageLink;
