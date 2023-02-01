import React from 'react';
import FormInput from '../form';
const CandidateContactInformarionForm = (props) => {
  const InputData = [
    {
      label: 'Email',
      type: 'Text',
      info: 'example@gmail.com',
      placeholder: 'Enter Here',
      options: ['a', 'a'],
    },
    {
      label: 'Phone Number',
      type: 'phonenumber',
      info: '(024) 030-7102',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'LinkedIn',
      type: 'text',
      info: 'Linked in',
      color: '#0E76A8',
      icon: 'fa fa-linkedin-square fa-lg',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Current Address',
      type: 'text',
      options: ['third'],
      info: '100 Murray St, Pyrmont NSW 2009...',
      placeholder: 'Enter Here',
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

export default CandidateContactInformarionForm;
