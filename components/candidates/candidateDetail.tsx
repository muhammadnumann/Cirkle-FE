import React, { FC, useState } from 'react';
import CandidateSidebar from './candidateSidebar/candidateSidebar';
import CandidateGeneralInformation from './candidateTabsContent/candidateGeneralInformation';
import CandidateCompensation from './compensation/compensation';
import CandidateContactInformation from './contactInformation';
import CandidateFiles from './files';
import CandidateOnboarding from './onBoarding/onboarding';
import CandidateWorkInformation from './workInformation/workInformation';

const CandidateDetail: FC = () => {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <>
      <div className="candidate-page">
        <CandidateSidebar setTabNumber={setTabNumber} tabNumber={tabNumber} />
        <div className={`candidate-content`}>
          {tabNumber === 0 && <CandidateGeneralInformation />}
          {tabNumber === 1 && <CandidateContactInformation />}
          {tabNumber === 2 && <CandidateOnboarding />}
          {tabNumber === 3 && <CandidateWorkInformation />}
          {tabNumber === 4 && <CandidateCompensation />}
          {tabNumber === 5 && <CandidateFiles />}
          {tabNumber === 6 && ''}
          {tabNumber === 7 && ''}
          {tabNumber === 8 && ''}
        </div>
      </div>
    </>
  );
};

export default CandidateDetail;
