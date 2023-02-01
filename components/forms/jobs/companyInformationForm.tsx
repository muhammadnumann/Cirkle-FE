import React from 'react';
import FormInput from '../form';

const JobCompanyInformationForm = (props) => {
  // const isSelected = props.isSelected;

  const InputData = [
    {
      label: 'Company',
      type: 'text',
      info: 'Axe Capital',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Contact',
      type: 'select',
      info: 'Jimmy Hentrix',
      placeholder: 'Enter here',
      options: ['Select', 'a'],
    },
    {
      label: 'Contact phone numbers',
      type: 'phonenumber',
      info: '(024) 030-7102',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Contact email',
      type: 'email',
      info: 'example@gmail.com',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
  ];
  return (
    <>
      <form>
        <div className="container-fluid">
          <div className="row w-100">
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

export default JobCompanyInformationForm;
