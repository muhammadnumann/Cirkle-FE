import React from 'react';
import FormInputs from '../form';

const ContactInformationForm = (props) => {
  const InputData = [
    {
      label: 'Primary Phone',
      type: 'phonenumber',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Mobile',
      type: 'phonenumber',
      info: 'SAC Capital Advisor',
      placeholder: 'Enter here',
      options: ['a', 'a'],
      addPhone: true,
    },
    {
      label: 'Home Phone',
      type: 'phonenumber',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
      addPhone: true,
    },
    {
      label: 'Primary Email',
      type: 'Email',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Personal Email',
      type: 'Email',
      options: ['First1', 'sec', 'third'],
      info: '1',
      placeholder: '',
    },
    {
      label: 'Current (Personal) address',
      type: 'text',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Switchboard',
      type: 'select',
      options: ['First1', 'sec', 'third'],
      info: '-',
      placeholder: '',
    },
    {
      label: 'Preferred contact method',
      type: 'radio',
      info: 'No',
      placeholder: '',
      options: ['a', 'a'],
    },
    {
      label: 'Preferred contact time',
      type: 'date',
      info: 'MM/DD/YYYY',
      placeholder: '',
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
      label: 'Facebook',
      type: 'text',
      info: 'Banking',
      color: '#4267B2',
      icon: 'fa fa-facebook-square fa-lg',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Twitter',
      type: 'text',
      info: '-',
      color: '#08A0E9',
      icon: 'fa fa-twitter-square fa-lg',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Skype',
      type: 'text',
      info: 'Accounting, banking',
      color: '#00AFF0',
      icon: ' fa fa-skype fa-lg',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Xing',
      type: 'text',
      info: 'Accounting, banking',
      color: '#026466',
      icon: 'fa fa-xing-square fa-lg',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
  ];
  return (
    <>
      <form>
        <div className="container">
          <div className="row w-100">
            {InputData.map((val, index) => {
              return (
                <div key={`${index}-askhd`} className="col-lg-4 col-md-6 col-12 mt-4 ps-0">
                  <FormInputs
                    key={index}
                    label={val.label}
                    type={val.type}
                    info={val.info}
                    isSelected={props.isSelected}
                    options={val.options}
                    placeholder={val.placeholder}
                    icon={val.icon}
                    iconColor={val.color}
                    addPhone={val.addPhone}
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

export default ContactInformationForm;
