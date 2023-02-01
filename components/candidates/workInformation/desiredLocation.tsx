import CandidateDesiredLocationForm from 'components/forms/candidate/desiredLocation';
import LocationIcon from 'components/icons/locationIcon';
import RightArrow from 'components/icons/rightArrow';
import React, { useState } from 'react';

function DesiredLocation() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <CandidateDesiredLocationForm isSelected={isSelected} />
      <div className="row">
        <div className="col-4">
          <div className="d-flex align-items-center justify-content-between  px-3 py-2 bg-light-blue border-r-20">
            <div className="d-flex align-items-center">
              <LocationIcon />
              <p className="font-12 font-weight-400 text-black mb-0 ps-3">
                Show the address on map
              </p>
            </div>
            <RightArrow />
          </div>
        </div>
      </div>
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

export default DesiredLocation;
