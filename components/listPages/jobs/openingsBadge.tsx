import { FC } from 'react';
import styles from './badge.module.css';

type Props = {
  openings?: number;
};
const OpeningsBadge: FC<Props> = ({ openings }) => {
  return <span className={`${styles.badge} ${styles.openingsBadge}`}>{openings ?? '--'}</span>;
};

export default OpeningsBadge;
