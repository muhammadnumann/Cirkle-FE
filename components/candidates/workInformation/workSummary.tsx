import CandidateWorkSummary from 'components/forms/candidate/workSummary';
import React from 'react';

function WorkSummary() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6 mt-md-0 mt-4 pe-md-4">
          <CandidateWorkSummary>Industries</CandidateWorkSummary>
        </div>
        <div className="col-md-6 mt-md-0 mt-4 ps-md-3">
          <CandidateWorkSummary>Sub Industries</CandidateWorkSummary>
        </div>
      </div>
    </>
  );
}

export default WorkSummary;
