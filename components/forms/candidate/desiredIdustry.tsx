import React from 'react';
import FormInput from '../form';

const CandidateDesiredIndustryForm = (props) => {
  const InputData = [
    {
      label: 'Industry',
      type: 'select',
      info: 'United States',
      placeholder: 'Enter Here',
      options: ['Select', 'US '],
    },
    {
      label: 'Sub Industry',
      type: 'select',
      info: 'United States',
      placeholder: 'Enter Here',
      options: ['Select', 'US '],
    },
    {
      label: 'Functional Expertise',
      type: 'select',
      info: 'United States',
      placeholder: 'Enter Here',
      options: ['Select', 'US '],
    },
    {
      label: 'Sub functional expertise',
      type: 'select',
      info: 'United States',
      placeholder: 'Enter Here',
      options: ['Select', 'US '],
    },
  ];

  return (
    <>
      <form>
        <div className="container">
          <div className="row w-100">
            {InputData.map((val, index) => {
              return (
                <div key={`${index}-asjhkk`} className="col-lg-4 col-md-6 col-12 mt-4 ps-0">
                  <FormInput
                    label={val.label}
                    type={val.type}
                    info={val.info}
                    isSelected={props.isSelected}
                    options={val.options}
                    placeholder={val.placeholder}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default CandidateDesiredIndustryForm;
