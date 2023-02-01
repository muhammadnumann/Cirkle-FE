import CandidateFileUploadCard from 'components/forms/candidate/fileUploadCard';
import React from 'react';
import { useState } from 'react';
import CandidateTabs from './candidateTabsContent/candidateTabs';

function CandidateFiles() {
  const [count, setCount] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [isSelected2, setIsSelected2] = useState(true);
  const [isSelected3, setIsSelected3] = useState(true);
  const [isSelected4, setIsSelected4] = useState(true);
  const data = [
    {
      description: 'Resume',
      isbtn: true,
      btnText: 'Upload',
      setIsSelected: setIsSelected,
      isSelected: isSelected,
    },
    {
      description: 'Onboarding Documents',
      isbtn: true,
      btnText: 'Upload',
      setIsSelected: setIsSelected2,
      isSelected: isSelected2,
    },
    {
      description: 'SOW',
      isbtn: true,
      btnText: 'Upload',
      setIsSelected: setIsSelected3,
      isSelected: isSelected3,
    },
    {
      description: 'Others',
      isbtn: true,
      btnText: 'Upload',
      setIsSelected: setIsSelected4,
      isSelected: isSelected4,
    },
  ];

  const components = [
    {
      value: <CandidateFileUploadCard />,
    },
    {
      value: <CandidateFileUploadCard />,
    },
    {
      value: <CandidateFileUploadCard />,
    },
    {
      value: <CandidateFileUploadCard />,
    },
  ];

  return (
    <>
      <div className="candidate-header">
        <CandidateTabs data={data} setCount={setCount} />
        <div className="line mt-3"></div>
      </div>
      <div className="tab-content h-92 " id="pills-tabContent">
        {components.map((v, i) => {
          return (
            // <></>
            count === i && v.value
          );
        })}
      </div>
    </>
  );
}

export default CandidateFiles;
