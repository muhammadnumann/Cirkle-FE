import AddNewComponent from 'components/forms/addNew';
import React from 'react';
import { useState } from 'react';
import CandidateTabs from '../candidateTabsContent/candidateTabs';
import DesiredIndustry from './desiredIndustry';
import DesiredLocation from './desiredLocation';
import WorkHistory from './workHistory';
import WorkSummary from './workSummary';

function CandidateWorkInformation() {
  const [count, setCount] = useState(0);
  const [isComponentAdd, setIsComponentAdd] = useState();
  const data = [
    {
      TabName: 'Work-History',
      description: 'Work History',
      isbtn: true,
      btnText: 'Add More Employement ',
      setIsSelected: setIsComponentAdd,
    },
    {
      TabName: 'CWork-Summary',
      description: 'Work Summary',
      isbtn: true,
      btnText: 'Add More Employement ',
      setIsSelected: setIsComponentAdd,
    },
    {
      TabName: 'Desired-Location',
      description: 'Desired Location',
      isbtn: true,
      btnText: 'Add More Employement ',
    },
    {
      TabName: 'Desired-industry',
      description: 'Desired industry',
      isbtn: true,
      btnText: 'Add More Employement ',
      setIsSelected: setIsComponentAdd,
    },
  ];

  const components = [
    {
      value: <WorkHistory />,
    },
    {
      value: <WorkSummary />,
    },
    {
      value: <DesiredLocation />,
    },
    {
      value: <DesiredIndustry />,
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
          return count === i && v.value;
        })}
      </div>

      {isComponentAdd && (
        <AddNewComponent setIsSelected={setIsComponentAdd} Name="Add Employement" />
      )}
      {/* {isDocument && <AddNewComponent setIsSelected={setIsDocument} Name='Add isDocumnet' />} */}
      {/* {isWork && <WorkSheetModel />} */}
    </>
  );
}

export default CandidateWorkInformation;
