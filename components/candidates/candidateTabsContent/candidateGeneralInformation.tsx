import EmailPermission from 'components/models/emailPermision';
import AddNewComponent from 'components/forms/addNew';
import CandidateGeneralInformarionForm from 'components/forms/candidate/candidateGeneralInformarion';
import React, { useState } from 'react';
import BreifIntoduction from './breifIntoduction';
import CandidatePrivacy from '../../forms/candidate/candidatePrivacy';
import CandidateTabs from './candidateTabs';
import EducationRefrences from './eduacation&Refrence';

export default function CandidateGeneralInformation() {
  const [isGeneralSelected, setIsGeneralSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [count, setCount] = useState(0);

  const data = [
    {
      TabName: 'Personal-Details',
      description: 'Personal Details',
      isbtn: true,
      btnText: 'Edit',
      setIsSelected: setIsGeneralSelected,
      isSelected: isGeneralSelected,
    },
    {
      TabName: 'Education-References',
      description: 'Education & References',
      isbtn: true,
      btnText: 'Add New',
      setIsSelected: setIsAddSelected,
      isSelected: isAddSelected,
    },
    {
      TabName: 'Privacy',
      description: 'Privacy',
    },
    {
      TabName: 'Brief-Intoduction',
      description: 'Brief Intoduction',
    },
  ];

  return (
    <>
      <CandidateTabs data={data} setCount={setCount} />
      <div className="line mt-3"></div>
      {count === 0 && <CandidateGeneralInformarionForm isSelected={isGeneralSelected} />}
      {count === 1 && <EducationRefrences />}
      {count === 2 && (
        <div className="row mt-4">
          <CandidatePrivacy />
          <CandidatePrivacy />
          <div className="mb-5">
            <EmailPermission />
          </div>
        </div>
      )}
      {count === 3 && (
        <div className="mt-4">
          <BreifIntoduction />
        </div>
      )}

      {isAddSelected && (
        <AddNewComponent
          setIsSelected={setIsAddSelected}
          isSelected={isAddSelected}
          Name="Add Education"
        />
      )}
    </>
  );
}
