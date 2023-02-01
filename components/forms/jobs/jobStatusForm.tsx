import React from 'react';
import FormInput from '../form';

const JobStatusForm = (props) => {
  // const isSelected = props.isSelected;

  const InputData = [
    {
      label: 'Active Applications',
      type: 'text',
      info: '1',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Headcount',
      type: 'select',
      info: '3',
      placeholder: 'Enter here',
      options: ['Select', 'a'],
    },
    {
      label: 'Job Category',
      type: 'text',
      info: 'Job',
      placeholder: 'Enter here',
      options: ['a', 'a'],
      labelIconCheck: true,
    },
    {
      label: 'Purchase Order Number',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Submission Date',
      type: 'date',
      options: ['a'],
      info: 'MM/DD/YYYY',
      placeholder: '',
    },
    {
      label: 'Submission Time',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Submission Limit',
      type: 'text',
      options: ['', 'a'],
      info: '-',
      placeholder: '',
    },
    {
      label: 'Sourcing open date',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: '',
      options: ['a', 'a'],
    },
    {
      label: 'Sourcing close date',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: '',
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
                    labelIconCheck={val.labelIconCheck}
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

export default JobStatusForm;
