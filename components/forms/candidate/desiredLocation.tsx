import React from 'react';
import FormInput from '../form';

const CandidateDesiredLocationForm = (props) => {
  const InputData = [
    {
      label: 'Country',
      type: 'select',
      info: 'United States',
      placeholder: 'Enter Here',
      options: ['Select', 'US '],
    },
    {
      label: 'Location name',
      type: 'text',
      info: '(024) 030-7102',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Address line 1',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Address line 2',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'District/Suburb',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Town/City',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'State',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Zip (Postal) code',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Nearest train stn ',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Longitude',
      type: 'text',
      options: ['a'],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Latitude',
      type: 'text',
      options: ['a'],
      info: '-',
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

export default CandidateDesiredLocationForm;
