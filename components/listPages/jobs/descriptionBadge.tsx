import { FC } from 'react';
import styles from './badge.module.css';

type Props = {
  hasDescription: boolean;
};
const DescriptionBadge: FC<Props> = ({ hasDescription }) => {
  return (
    <span
      className={`${styles.badge} ${styles.descriptionBadge} ${
        hasDescription ? styles.descriptionTrue : styles.descriptionFalse
      }`}
    >
      {hasDescription ? 'YES' : 'NO'}
    </span>
  );
};

export default DescriptionBadge;
