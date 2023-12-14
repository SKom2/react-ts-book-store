import { type FC } from 'react';
import { pageLinks } from '@data/headerData';
import PageLink from '@components/Layout/Header/PageLink/PageLink';
import styles from './PageLinksList.module.scss';

const PageLinksList: FC = () => {
  return (
    <ul className={styles.pageLinks}>
      {pageLinks.map((link) => (
        <li key={link.id}>
          <PageLink
            path={link.path}
            title={link.title}
            svg={link.svg}
            customStyle={link.customStyle}
          />
        </li>
      ))}
    </ul>
  );
};

export default PageLinksList;
