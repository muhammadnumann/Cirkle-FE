import {
  CustomRenderer,
  CustomValueCalc,
  KeyGenerator,
  ListBodyImpl,
  TableHeaders,
} from 'components/listpage';
import { v1ListCandidatesResponse } from 'internal/fetcher/types';
import { ArrElement } from 'internal/types/types';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/future/image'));
const Link = dynamic(() => import('next/link'));
const CandidateAvatarMaleIcon = dynamic(() => import('components/icons/candidateAvatarMale'));
const ListTooltip = dynamic(() => import('components/listpage/tooltip'));

type ResponseCandidates = ArrElement<v1ListCandidatesResponse['candidates']>;

type Columns = {
  sNum: never;
  fullName: never;
  email: never;
  homePhone: never;
  mobilePhone: never;
  availableToPlaceDate: never;
  weeklyHoursAvailable: never;
  actions: never;
};

const columns: TableHeaders<Columns> = {
  sNum: { text: 'S.NO.', sortable: true },
  fullName: { text: 'FULL NAME', sortable: true },
  email: { text: 'EMAIL', sortable: true },
  homePhone: { text: 'HOME PHONE', sortable: true },
  mobilePhone: { text: 'MOBILE PHONE', sortable: true },
  availableToPlaceDate: { text: 'AVAILABLE TO PLACE DATE', sortable: true },
  weeklyHoursAvailable: { text: 'WEEKLY HOURS AVAILABLE', sortable: true },
  actions: { text: 'ACTIONS', sortable: true },
};

const valueCalc: CustomValueCalc<Columns, ResponseCandidates> = {
  sNum: ({ id }) => id,
  fullName: ({ fullName }) => fullName,
  email: ({ email }) => email ?? '--',
  homePhone: ({ homePhone }) => homePhone ?? '--',
  mobilePhone: ({ mobilePhone }) => mobilePhone ?? '--',
  availableToPlaceDate: ({ availableToPlaceDate }) => availableToPlaceDate ?? '--',
  weeklyHoursAvailable: ({ weeklyAvailableHours }) => weeklyAvailableHours ?? '--',
  actions: () => '',
};

const renderer: CustomRenderer<Columns, ResponseCandidates> = {
  sNum: ({ id }) => (
    <Link href={`/candidates/${id}`}>
      <a className="no-style">{`${id}.`}</a>
    </Link>
  ),
  fullName: ({ id, avatarURL, fullName }) => (
    <div className="fullName">
      <Link href={`/candidates/${id}`}>
        <a className="no-style">
          {avatarURL ? (
            <Image src={avatarURL} width={31} height={31} className="avatar" alt="contact-avatar" />
          ) : (
            <CandidateAvatarMaleIcon className="avatar" />
          )}
          <span>{fullName}</span>
        </a>
      </Link>
    </div>
  ),
  email: ({ email }) => <span>{email ?? '--'}</span>,
  homePhone: ({ homePhone }) => <span>{homePhone ?? '--'}</span>,
  mobilePhone: ({ mobilePhone }) => <span>{mobilePhone ?? '--'}</span>,
  availableToPlaceDate: ({ availableToPlaceDate }) => <span>{availableToPlaceDate ?? '--'}</span>,
  weeklyHoursAvailable: ({ weeklyAvailableHours }) => <span>{weeklyAvailableHours ?? '--'}</span>,
  actions: () => (
    <span data-tip data-for="listpage" data-event="click">
      <ListTooltip />
    </span>
  ),
};

const keyGenerator: KeyGenerator<ResponseCandidates> = ({ id }) => id;

const listPageImpl: ListBodyImpl<Columns, ResponseCandidates> = {
  columns,
  valueCalc,
  renderer,
  keyGenerator,
};

export default listPageImpl;
