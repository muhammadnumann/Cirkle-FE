import CandidateContractForm from 'components/forms/candidate/contract';
import CandidatePermanantForm from 'components/forms/candidate/permanent';
import React from 'react';
import { useState } from 'react';
import CandidateTabs from '../candidateTabsContent/candidateTabs';

function CandidateCompensation() {
  const [count, setCount] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [isSelected2, setIsSelected2] = useState(true);
  const data = [
    {
      description: 'Permanent (Direct Hire)',
      isbtn: true,
      btnText: 'Edit',
      setIsSelected: setIsSelected,
      isSelected: isSelected,
    },
    {
      description: 'Contract',
      isbtn: true,
      btnText: 'Edit',
      setIsSelected: setIsSelected2,
      isSelected: isSelected2,
    },
  ];

  const components = [
    {
      value: <CandidatePermanantForm isSelected={isSelected} />,
    },
    {
      value: <CandidateContractForm isSelected={isSelected2} />,
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

      {/* {isComponentAdd && <AddNewComponent setIsSelected={setIsComponentAdd} Name='Add Employement' />} */}
    </>
  );
}

export default CandidateCompensation;
