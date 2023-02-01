import { useAPIContext } from 'context/api';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import JobsListPageImpl from 'components/listPages/jobs/commonListPageComponents';
import dynamic from 'next/dynamic';

import AddContactBottom from 'components/forms/contacts/addcontactbottom';
import JobDescription from 'components/forms/jobs/jobDescription';

const FilterIcon = dynamic(() => import('components/icons/list/filter'));
const PaginationBar = dynamic(() => import('components/pagination/Pagination'));
const ListPage = dynamic(() => import('components/listpage'));

const { columns, renderer, valueCalc, keyGenerator } = JobsListPageImpl;

const getQueryKey = (lastSeenID: number, limit: number): [string, number, number] => [
  'jobs',
  lastSeenID,
  limit,
];

const JobsListPages: FC = () => {
  const InputData = [
    {
      label: 'Job title',
      type: 'text',
      info: 'Enter here',
      placeholder: 'Enter here',
    },
    {
      label: 'Company',
      type: 'text',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Location',
      type: 'text',
      info: 'SAC Capital Advisor',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Job owner',
      type: 'text',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Date added',
      type: 'date',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Job type',
      type: 'text',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Job pay',
      type: 'text',
      options: [''],
      info: '-',
      placeholder: 'Enter Here',
      bgClass: 'phonecontainermodal',
    },
  ];
  const { query } = useRouter();
  const { client, authIsLoading } = useAPIContext();
  // eslint-disable-next-line
  const [lastSeenID, setLastSeenID] = useState(0);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(Number(query.page ?? 1));
  const [isSelected, setIsSelected] = useState(false);
  const [viewDescription, setviewDescription] = useState(false);
  const [jobDescriptionText, setjobDescriptionText] = useState('');

  const {
    data: response,
    // error,
    // isLoading,
  } = useQuery(getQueryKey(lastSeenID, limit), () => client.listJobOrders({ lastSeenID, limit }), {
    enabled: !authIsLoading,
  });

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
    <div id={`page`} className="ps-2">
      {isSelected && <div className="overlay-gray"></div>}
      {viewDescription && <div className="overlay-gray"></div>}

      <div id={`header`} className="d-flex align-items-center justify-content-between  ">
        <div className={`left`}>
          <h3 className="globle-heading-h3  mb-1">All Jobs</h3>
          <p className="globle-lg-p">2 new jobs added</p>
        </div>
        <div className="d-flex">
          <button className="filterbtn" onClick={() => setviewDescription(true)}>
            <FilterIcon />
            &nbsp;
            <span>Filters</span>
          </button>
          <button className="globle-gradient-btn border-r-6" onClick={() => setIsSelected(true)}>
            Create Job
          </button>
        </div>
      </div>
      <ListPage
        listContainerClassName={`results`}
        columns={columns}
        items={response?.jobOrders}
        valueCalc={valueCalc}
        renderer={renderer}
        keyGenerator={keyGenerator}
      />
      <div id={`pagination`}>
        {response && (
          <PaginationBar
            currentPage={currentPage}
            pageCount={Math.ceil(response.jobOrders.length / limit)}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      {isSelected && (
        <AddContactBottom
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          jobsection={true}
          heading="Add New Job"
          InputData={InputData}
          addorsave="Save"
          isFullScreen={true}
          setjobDescriptionText={setjobDescriptionText}
        />
        // <AddJob setIsSelected={setIsSelected} isSelected={isSelected} Name="Crate Job" />
      )}
      {viewDescription && (
        <JobDescription
          setviewDescription={setviewDescription}
          heading="View Job description"
          addorsave="Edit"
          isFullScreen={true}
          jobDescriptionText={jobDescriptionText}
        />
      )}
    </div>
  );
};

export default JobsListPages;
