import React from 'react';
import FormInput from '../form';

const WorkInformationForm = (props) => {
  const InputData = [
    {
      label: 'Job Title',
      type: 'text',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Company',
      type: 'text',
      info: 'SAC Capital Advisor',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Work Location',
      type: 'text',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    { label: 'Job level', type: 'text', info: '-', placeholder: 'Enter here', options: ['a', 'a'] },
    {
      label: 'Job level (hierarchy)',
      type: 'select',
      options: ['First1', 'sec', 'third'],
      info: '1',
      placeholder: '',
    },
    {
      label: 'Department',
      type: 'text',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Reports to',
      type: 'select',
      options: ['First1', 'sec', 'third'],
      info: '-',
      placeholder: '',
    },
    { label: 'Is Assistant', type: 'radio', info: 'No', placeholder: '', options: ['a', 'a'] },
    { label: 'Start date', type: 'date', info: 'MM/DD/YYYY', placeholder: '', options: ['a', 'a'] },
    {
      label: 'Skills',
      type: 'text',
      info: 'Skill 1, Skill 2, Skill 3',
      dropdownlist: true,
      placeholder: 'Enter here',
      options: ['a', 'a'],
      more: true,
    },
    {
      label: 'Industry',
      type: 'text',
      info: 'Banking',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Sub industry',
      type: 'text',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Functional Expertise',
      type: 'text',
      info: 'Accounting, banking',
      placeholder: 'Enter here',
      dropdownlist: true,
      options: ['a', 'a'],
      more: true,
    },
    {
      label: 'Sub functional expertise',
      type: 'text',
      info: 'Accounting, banking',
      dropdownlist: true,
      placeholder: 'Enter here',
      options: ['a', 'a'],
      more: true,
    },
  ];

  return (
    <>
      <div className="row w-100 mx-0">
        {InputData.map((val, index) => {
          return (
            <div key={`${index}-aksjhiwe`} className="col-lg-4 col-md-6 col-12 mt-4 ps-0">
              <FormInput
                label={val.label}
                type={val.type}
                info={val.info}
                // dropdownlist={val.dropdownlist}
                isSelected={props.isSelected}
                options={val.options}
                placeholder={val.placeholder}
                more={val.more}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkInformationForm;
