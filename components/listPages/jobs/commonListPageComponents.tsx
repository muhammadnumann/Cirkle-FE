import StatusBadge, { JobStatus } from 'components/listPages/jobs/statusBadge';
import { ListJobOrdersResponse } from 'internal/fetcher/types';
import { ArrElement } from 'internal/types/types';
import { stringToEnum } from 'internal/utils';
import dynamic from 'next/dynamic';
import {
  CustomRenderer,
  CustomValueCalc,
  KeyGenerator,
  ListBodyImpl,
  TableHeaders,
} from '../../listpage';
import DescriptionBadge from './descriptionBadge';
import OpeningsBadge from './openingsBadge';

const ListTooltip = dynamic(() => import('components/listpage/tooltip'));

type ResponseJobOrder = ArrElement<ListJobOrdersResponse['jobOrders']>;

type Columns = {
  sNum: never;
  jobTitle: never;
  company: never;
  location: never;
  jobOwner: never;
  dateAdded: never;
  jobType: never;
  status: never;
  activeApplications: never;
  billRate: never;
  jobDescription: never;
  actions: never;
};

const columns: TableHeaders<Columns> = {
  sNum: { text: 'S.NO.', sortable: false },
  jobTitle: { text: 'JOB TITLE', sortable: true },
  company: { text: 'COMPANY', sortable: true },
  location: { text: 'LOCATION', sortable: true },
  jobOwner: { text: 'JOB OWNER', sortable: true },
  dateAdded: { text: 'DATE ADDED', sortable: true },
  jobType: { text: 'JOB TYPE', sortable: true },
  status: { text: 'STATUS', sortable: true },
  activeApplications: { text: 'ACTIVE APPLICATIONS', sortable: true },
  billRate: { text: 'BILL RATE', sortable: true },
  jobDescription: { text: 'JOB DESCRIPTION', sortable: true },
  actions: { text: 'ACTIONS', sortable: false },
};

const valueCalc: CustomValueCalc<Columns, ResponseJobOrder> = {
  sNum: ({ id }) => id,
  jobTitle: ({ summary }) => summary,
  company: ({ clientID }) => clientID,
  location: ({ addressLine1 }) => addressLine1,
  jobOwner: ({ primaryOwnerID }) => primaryOwnerID,
  dateAdded: ({ createdAt }) => {
    return new Date(createdAt ?? '').toLocaleDateString('en-US');
  },
  jobType: () => '',
  status: ({ status }) => stringToEnum(JobStatus, status),
  activeApplications: () => 10,
  billRate: ({ billRate }) => Number(billRate).toFixed(2),
  jobDescription: ({ description }) => description,
  actions: () => '',
};

const renderer: CustomRenderer<Columns, ResponseJobOrder> = {
  sNum: ({ id }) => <span>{`${id}.`}</span>,
  jobTitle: ({ summary }) => <span>{summary}</span>,
  company: ({ clientID }) => <span>{clientID}</span>,
  location: ({ addressLine1 }) => <span>{addressLine1 ?? '--'}</span>,
  jobOwner: ({ primaryOwnerID }) => <span>{primaryOwnerID}</span>,
  dateAdded: ({ createdAt }) => (
    <span>{new Date(createdAt ?? '').toLocaleDateString('en-US')}</span>
  ),
  jobType: () => <span>Todo</span>, // todo not a concept we have today
  status: ({ status }) => <StatusBadge status={stringToEnum(JobStatus, status)} />,
  activeApplications: () => <OpeningsBadge openings={10} />,
  billRate: ({ billRate }) => <span>{billRate ? `$${Number(billRate).toFixed(2)}` : '--'}</span>,
  jobDescription: ({ description }) => <DescriptionBadge hasDescription={!!description} />,
  actions: () => (
    <span data-tip data-for="listpage" data-event="click">
      <ListTooltip />
    </span>
  ),
};

// ID is always set
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const keyGenerator: KeyGenerator<ResponseJobOrder> = ({ id }) => id!;

export const listPageImpl: ListBodyImpl<Columns, ResponseJobOrder> = {
  columns,
  valueCalc,
  renderer,
  keyGenerator,
};

export default listPageImpl;
