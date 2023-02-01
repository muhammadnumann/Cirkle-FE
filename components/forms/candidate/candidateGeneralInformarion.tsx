import React from 'react';
import FormInput from '../form';
const CandidateGeneralInformarionForm = (props) => {
  const InputData = [
    {
      label: 'Title',
      type: 'select',
      options: ['Select', 'First1', 'sec', 'third'],
      info: 'Mr.',
      placeholder: '',
    },
    {
      label: 'First name',
      type: 'text',
      info: 'Korsgaard',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Last name',
      type: 'text',
      info: 'Korsgaard',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Preferred name',
      type: 'text',
      info: 'Korsgaard',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Designation',
      type: 'text',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Email',
      type: 'Text',
      info: 'example@gmail.com',
      placeholder: 'Enter Here',
      options: ['a', 'a'],
    },
    {
      label: 'Phone Number',
      type: 'text',
      info: '(024) 030-7102',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Location',
      type: 'text',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Gender',
      type: 'select',
      options: ['Select', 'Female', 'Male'],
      info: 'Male',
      placeholder: '',
    },
    { label: 'Start date', type: 'date', info: 'MM/DD/YYYY', placeholder: '', options: ['a', 'a'] },
    { label: 'Source', type: 'text', info: '-', placeholder: 'Enter here', options: ['a', 'a'] },
    {
      label: 'Contact Owner',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Contact Owner’s Location',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Preferred language',
      type: 'select',
      options: ['Select', 'urdu', 'Punjabi'],
      info: '-',
      placeholder: '',
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

export default CandidateGeneralInformarionForm;
