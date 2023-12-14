import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageLink.module.scss';

interface PageLinkProps {
  path: string;
  title: string;
  svg: string;
  customStyle?: string;
}

const PageLink: FC<PageLinkProps> = ({ path, title, svg, customStyle }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.pageLink} ${styles.pageLink_active}`
          : styles.pageLink
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.pageLink__icon} ${styles[customStyle]}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {title}
    </NavLink>
  );
};

PageLink.defaultProps = {
  customStyle: '',
};

export default PageLink;
