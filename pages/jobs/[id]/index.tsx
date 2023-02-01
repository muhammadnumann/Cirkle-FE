import Head from 'next/head';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const JobSidebar = dynamic(() => import('../../../components/jobs/jobSidebar/jobSidebar'));
const JobDetail = dynamic(() => import('../../../components/jobs/index'));
const JobStatus = dynamic(() => import('../../../components/jobs/jobStatus'));
const CompanyInformation = dynamic(() => import('../../../components/jobs/companyInformation'));
const Forcasting = dynamic(() => import('../../../components/jobs/forcasting/forcasting'));
const JobActivity = dynamic(() => import('../../../components/jobs/activity'));
const JobNotes = dynamic(() => import('../../../components/jobs/notes'));

export default function ContactDetail() {
  const [tabCounter, setTabCounter] = useState(0);

  return (
    <>
      <Head>
        <title>Jobs Detail</title>
      </Head>
      <div className="grid-page mt-3">
        <div className="grid-sidebar">
          <JobSidebar setTabCounter={setTabCounter} tabCounter={tabCounter} />
        </div>
        <div className={`grid-content w-100`}>
          {tabCounter === 0 && <JobDetail />}
          {tabCounter === 1 && <JobStatus />}
          {tabCounter === 2 && <CompanyInformation />}
          {tabCounter === 3 && <Forcasting />}
          {tabCounter === 4 && <JobActivity />}
          {tabCounter === 5 && <JobNotes />}
        </div>
      </div>
    </>
  );
}
