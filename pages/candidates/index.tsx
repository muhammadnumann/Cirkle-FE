import React, { FC } from 'react';
import { v1ListCandidatesResponse } from '../../internal/fetcher/types';
import dynamic from 'next/dynamic';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const CandidateList1 = dynamic(() => import('../../components/candidates/candidateListpage'));

type Props = v1ListCandidatesResponse;
const CandidateListPage: FC<Props> = (props) => {
  return <CandidateList1 {...props} />;
};

export default withPageAuthRequired(CandidateListPage);
