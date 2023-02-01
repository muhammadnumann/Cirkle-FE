import React from 'react';
import FormInput from '../form';
const JobDetailForm = (props) => {
  const InputData = [
    {
      label: 'Job Title',
      type: 'text',
      info: 'Investment Banking Analyst',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Internal recruiter',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Site manager (report to)',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Agencies - Partners',
      type: 'text',
      info: 'Agency 1, Agency 2',
      placeholder: 'Enter here',
      dropdownlist: true,
      options: ['a', 'a'],
    },
    {
      label: ' Job type ',
      type: 'select',
      options: ['Contract', 'First ', 'Sec'],
      info: 'Contract',
      placeholder: '',
      labelIconCheck: true,
    },
    {
      label: 'Emp Type',
      type: 'text',
      info: 'Full time',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Skills / Keywords',
      type: 'text',
      options: ['', 'a'],
      info: '-',
      placeholder: '',
    },
    {
      label: 'Created by',
      type: 'text',
      info: 'Ryan Curtis',
      placeholder: 'Ryan Curtis',
      options: ['a', 'a'],
    },
    {
      label: 'Reg. Date',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: '',
      options: ['a', 'a'],
    },
    {
      label: 'Last updated on',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: '',
      options: ['a', 'a'],
    },
    {
      label: 'Brands',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Branches',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Industry',
      type: 'text',
      info: 'Banking',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Sub Industry',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Functional expertise',
      type: 'text',
      info: 'Expertise 1, Expertise 2',
      dropdownlist: true,
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Sub functional expertise',
      type: 'text',
      info: 'Expertise 1, Expertise 2',
      dropdownlist: true,
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Job site location',
      type: 'text',
      info: 'Melbourne - ID 8978',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Job posting',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Job owner',
      type: 'text',
      info: 'Company Admin',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: "Job owner's location",
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
                    // dropdownlist={val.dropdownlist}
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

export default JobDetailForm;
