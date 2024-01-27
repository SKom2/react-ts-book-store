import Stephen from '@images/Stephen.png';

const popularCards = [
  {
    id: 1,
    name: 'Author of the week',
    title: 'Stephen King Collection',
    subtitle: '78 books',
    children: (
      <img
        alt="Stephen King"
        src={Stephen}
        className={styles.popularCard__image}
      />
    ),
  },
  {
    id: 2,
    name: 'Last Listened',
    title: 'False Witness: A Novel',
    subtitle: 'Karin Slaughter',
    children: (
      <img
        alt="Stephen King"
        src={Stephen}
        className={styles.popularCard__image}
      />
    ),
  },
];

export default popularCards;