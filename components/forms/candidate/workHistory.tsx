import React from 'react';
import FormInput from '../form';
const CandidateWorkHistory = (props) => {
  const InputData = [
    {
      label: 'Job Title',
      type: 'text',
      info: 'Sales, Financing, Equity',
      placeholder: 'Enter Here',
    },
    {
      label: 'Employer',
      type: 'text',
      info: 'Axe Capital',
      placeholder: 'Enter here',
    },
    {
      label: 'LinkedIn',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: 'Enter here',
    },
  ];

  return (
    <>
      {InputData.map((val, index) => {
        return (
          <div key={`${index}-asjhkk`} className="col-lg-3 col-md-6 col-12 mt-4 ps-0">
            <FormInput
              label={val.label}
              type={val.type}
              info={val.info}
              isSelected={props.isSelected}
              placeholder={val.placeholder}
            />
          </div>
        );
      })}
    </>
  );
};

export default CandidateWorkHistory;
