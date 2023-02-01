import FormInputs from 'components/forms/form';
import React, { useState } from 'react';
const CandidatePrivacy = () => {
  const InputData = [
    {
      label: 'Consent to Keep',
      type: 'text',
      info: 'Must Request',
      placeholder: 'Enter here',
      ClassName: 'privacy-bg-input',
    },
    {
      label: 'Explicit consent',
      type: 'text',
      info: 'Unknown',
      placeholder: 'Enter here',
      ClassName: 'privacy-bg-input',
    },
    {
      label: 'Person informed how to exercise their rights',
      type: 'text',
      info: 'None',
      placeholder: 'Enter here',
      ClassName: 'privacy-bg-input',
    },
    {
      label: 'Request through',
      type: 'text',
      info: 'None',
      placeholder: 'Enter here',
      ClassName: 'privacy-bg-input',
    },
    {
      label: 'Obtained through',
      type: 'text',
      info: 'None',
      placeholder: 'Enter Here',
      ClassName: 'privacy-bg-input',
    },
    {
      label: 'Expires',
      type: 'text',
      info: 'None',
      placeholder: 'Enter Here',
      ClassName: 'privacy-bg-input',
    },
  ];
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className="col-md-6 mt-md-0 mt-4">
        <div className="card-bg-white">
          <div className={`bottom-line d-flex align-items-center justify-content-between p-4`}>
            <h2 className="font-16 font-weight-400 text-black">Privacy 1</h2>

            {isSelected ? (
              <div className="d-flex">
                <button
                  className={`filterbtn w-100 px-3`}
                  onClick={() => {
                    setIsSelected(!isSelected);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`globle-gradient-btn border-r-6 px-4`}
                  onClick={() => {
                    setIsSelected(!isSelected);
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className={`filterbtn`}
                onClick={() => {
                  setIsSelected(!isSelected);
                }}
              >
                Edit
              </button>
            )}
          </div>
          <div className="row p-4 w-100">
            {InputData.map((val, index) => {
              return (
                <div key={`${index}-askhd`} className="col-12">
                  <FormInputs
                    label={val.label}
                    type={val.type}
                    info={val.info}
                    isSelected={isSelected}
                    placeholder={val.placeholder}
                    ClassName={val.ClassName}
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
export default CandidatePrivacy;
