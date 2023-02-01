import BankingIcon from 'components/icons/bankingIcon';
import DeleteIcon from 'components/icons/deleteIcon';
import React, { useState } from 'react';

const InputData = [
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
  {
    icon: <BankingIcon />,
    Name: 'Banking',
  },
];

const WorkSUmmaryList = (props) => {
  return (
    <>
      {' '}
      {InputData.map((val, index) => {
        return (
          <div key={index} className="d-flex align-items-center justify-content-between mt-4 mb-1">
            <div className="d-flex align-items-center">
              {val.icon}
              <span className="ms-3 font-16 font-weight400 text-black">{val.Name}</span>
            </div>
            {props.isSelected ? (
              <button className="border-0 bg-transparent me-1">
                <DeleteIcon />
              </button>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </>
  );
};

const CandidateWorkSummary = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className="card-bg-white">
        <div className={`bottom-line d-flex align-items-center justify-content-between p-4`}>
          <h2 className="font-16 font-weight-400 text-black">{children}</h2>
          {isSelected ? (
            <div className="d-flex">
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
              className={`filterbtn`}
              onClick={() => {
                setIsSelected(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
        <div className="px-4 pb-3">
          <WorkSUmmaryList isSelected={isSelected} />
        </div>
      </div>
    </>
  );
};

export default CandidateWorkSummary;
