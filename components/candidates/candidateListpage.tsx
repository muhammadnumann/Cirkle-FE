import { useAPIContext } from 'context/api';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { v1ListCandidatesResponse } from '../../internal/fetcher/types';
import CandidateListPageImpl from 'components/listPages/candidates/commonListPageComponents';
import dynamic from 'next/dynamic';

const ListPage = dynamic(() => import('components/listpage'));
const PaginationBar = dynamic(() => import('components/pagination/Pagination'));
const AddCandidate = dynamic(() => import('components/forms/candidate/addCandidate'));

const { columns, valueCalc, renderer, keyGenerator } = CandidateListPageImpl;

const getQueryKey = (lastSeenID: number, limit: number): [string, number, number] => [
  'candidates',
  lastSeenID,
  limit,
];

type Props = v1ListCandidatesResponse;

const CandidateList1: FC<Props> = (props) => {
  const { query } = useRouter();
  const { client, authIsLoading } = useAPIContext();
  // eslint-disable-next-line
  const [lastSeenID, setLastSeenID] = useState(0);
  // eslint-disable-next-line
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(Number(query.page ?? 1));
  const [isSelected, setIsSelected] = useState(false);
  const { data } = useQuery(
    getQueryKey(lastSeenID, limit),
    () => client.listCandidates({ lastSeenID, limit }),
    {
      enabled: !authIsLoading,
    }
  );
  const response = data ? data : props;

  useEffect(() => {
    if (currentPage === 1) {
      setLastSeenID(0);
      return;
    }
    if (response?.lastID) {
      setLastSeenID(response?.lastID);
    }
  }, [setLastSeenID, currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="#page" className="ps-2">
      <div id="#header" className="d-flex align-items-center justify-content-between">
        <div className="left">
          <h3 className="globle-heading-h3 mb-1">All Candidates</h3>
          <p className="globle-lg-p">More than 10+ new candidates</p>
        </div>
        <button
          className={`globle-gradient-btn border-r-6 px-4 py-2`}
          onClick={() => setIsSelected(true)}
        >
          Add Candidate
        </button>
      </div>
      <ListPage
        listContainerClassName="results"
        columns={columns}
        items={response?.candidates}
        valueCalc={valueCalc}
        renderer={renderer}
        keyGenerator={keyGenerator}
      />
      <div id="#pagination">
        {response && (
          <PaginationBar currentPage={currentPage} pageCount={10} onPageChange={setCurrentPage} />
        )}
      </div>
      {isSelected && <AddCandidate setIsSelected={setIsSelected} isSelected={isSelected} />}
    </div>
  );
};

export default CandidateList1;
