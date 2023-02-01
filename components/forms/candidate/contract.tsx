import React from 'react';
import FormInput from '../form';

const CandidateContractForm = (props) => {
  const InputData = [
    {
      label: 'Time interval',
      type: 'select',
      info: 'Australian Dollar (AUD$)',
      placeholder: 'Enter here',
      options: ['Select', 'daily', 'sec'],
    },

    {
      label: 'Pay rate',
      type: 'text',
      info: 'Annual',
      placeholder: 'Enter here',
      options: ['Select', 'a'],
    },
    {
      label: 'Desired pay rate',
      type: 'text',
      info: '- ',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Pay - range froms',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Pay - range to',
      type: 'text',
      options: ['a'],
      info: '40,000.00',
      placeholder: 'Enter here',
    },
    {
      label: 'Availability for work',
      type: 'date',
      info: '40,000.00',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
  ];
  return (
    <>
      <form>
        <div className="container-fluid">
          <div className="row">
            {InputData.map((val, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-12 mt-3 ps-0">
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
export default CandidateContractForm;
