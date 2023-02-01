import CandidateDesiredIndustryForm from 'components/forms/candidate/desiredIdustry';
import React, { useState } from 'react';

function DesiredIndustry() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <CandidateDesiredIndustryForm isSelected={isSelected} />

      {isSelected ? (
        <div className="d-flex mt-5">
          <button
            className={`globle-pink-btn border-r-6 px-4`}
            onClick={() => {
              setIsSelected(false);
            }}
          >
            <span className="text-gradient px-1">Cancel</span>
          </button>
          <button
            className={`globle-gradient-btn border-r-6 px-4 ms-2`}
            onClick={() => {
              setIsSelected(false);
            }}
          >
            <span className="mx-3 text-white">Save</span>
          </button>
        </div>
      ) : (
        <button
          className={`globle-gradient-btn border-r-6 mt-5`}
          onClick={() => {
            setIsSelected(true);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default DesiredIndustry;
