import { type FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import WindowDimensionsContext from '@context/WindowDimensions/WindowDimensionsContext';
import { Mobile } from '@data/windowDimensions';
import styles from './PageLink.module.scss';

interface PageLinkProps {
  path: string;
  title: string;
  svg: string;
  customStyle?: string;
}

const PageLink: FC<PageLinkProps> = ({ path, title, svg, customStyle }) => {
  const { width } = useContext(WindowDimensionsContext);

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
        className={`${styles.pageLink__icon} ${
          customStyle ? styles[customStyle] : ''
        }`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {width >= Mobile && title}
    </NavLink>
  );
};

PageLink.defaultProps = {
  customStyle: '',
};

export default PageLink;
