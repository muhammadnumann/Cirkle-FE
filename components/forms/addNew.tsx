/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import FormInputs from './form';

const AddNewComponent = (props: any) => {
  const setIsSelected = props.setIsSelected;
  const InputData = [
    {
      label: 'Title',
      type: 'select',
      options: ['Select', 'First', 'Sec'],
      info: '1',
      placeholder: '',
    },
    {
      label: 'First name',
      type: 'text',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Last name',
      type: 'text',
      info: 'SAC Capital Advisor',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Preferred name',
      type: 'text',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Designation',
      type: 'email',
      info: '-',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },

    {
      label: 'Email',
      type: 'email',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Phone Number',
      type: 'number',
      options: [''],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Location',
      type: 'text',
      options: [''],
      info: '-',
      placeholder: 'Enter Here',
    },
    {
      label: 'Gender',
      type: 'select',
      options: ['Select', 'Female', 'Male'],
      info: '-',
      placeholder: '',
    },
  ];
  return (
    <>
      <div className={`sidebar-right-side `}>
        <div className="row bg-light-pink">
          <div className="col-6">
            <div
              className="cr-p px-3 py-4 d-flex align-items-center"
              onClick={() => setIsSelected(false)}
            >
              <span className="arrowLeft">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#6E0674', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#4660AF', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad1)"
                    d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
                  />
                </svg>
              </span>
              <span className="ms-3 globle-heading-h4">{props.Name}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center justify-content-end h-100 contact-add-cancel">
              <button className="btn btn-white py-2" onClick={() => setIsSelected(false)}>
                <span>Cancel</span>
              </button>
              <button className="btn btn-theme-primary py-2">Add</button>
            </div>
          </div>
        </div>
        <div className="ps-3">
          <div className="form-setting row mx-0">
            {InputData.map((val, index) => {
              return (
                <div key={`${index}-ask`} className="col-lg-9 inputStyle col-md-10 col-12 mt-4">
                  <FormInputs
                    label={val.label}
                    type={val.type}
                    info={val.info}
                    isSelected={true}
                    options={val.options}
                    placeholder={val.placeholder}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewComponent;
