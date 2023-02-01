import React from 'react';
import FormInput from '../form';

const CandidatePermanantForm = (props) => {
  const InputData = [
    {
      label: 'Currency',
      type: 'select',
      info: 'Australian Dollar (AUD$)',
      placeholder: 'Enter here',
      options: ['Select', 'first', 'sec'],
    },

    {
      label: 'Salary Type',
      type: 'select',
      info: 'Annual',
      placeholder: 'Enter here',
      options: ['Select', 'a'],
    },
    {
      label: 'Mths/year',
      type: 'text',
      info: '- ',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Monthly salary',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Annual salary',
      type: 'text',
      options: ['a'],
      info: '40,000.00',
      placeholder: 'Enter here',
    },
    {
      label: 'Annual salary (Desired)',
      type: 'text',
      info: '40,000.00',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Current bonus',
      type: 'text',
      options: ['', 'a'],
      info: '-',
      placeholder: 'Enter here',
    },
    {
      label: 'Desired bonus',
      type: 'text',
      info: '-',
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
export default CandidatePermanantForm;
