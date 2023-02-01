import { FC } from 'react';
import styles from './badge.module.css';

export enum JobStatus {
  Unassigned = 'Unassigned',
  Open = 'Open',
  InProgress = 'In Progress',
  WaitingOnClient = 'Waiting On Client',
  Completed = 'Completed',
}

const statusToStyle = (status: JobStatus): string => {
  switch (status) {
    case JobStatus.Unassigned:
      return styles.unassigned;
    case JobStatus.Open:
      return styles.open;
    case JobStatus.InProgress:
      return styles.inProgress;
    case JobStatus.WaitingOnClient:
      return styles.waitingOnClient;
    case JobStatus.Completed:
      return styles.completed;
    default:
      return styles.unassigned;
  }
};

type Props = {
  status: JobStatus;
};
const StatusBadge: FC<Props> = ({ status }) => {
  return (
    <span className={`${styles.badge} ${styles.statusBadge} ${statusToStyle(status)}`}>
      {status.toString()}
    </span>
  );
};

export default StatusBadge;
