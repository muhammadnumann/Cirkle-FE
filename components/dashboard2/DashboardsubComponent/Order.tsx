import Box from 'components/icons/box';
import React from 'react';

const DashboardOrder = () => {
  return (
    <div className="DashContainer">
      <Box />
      <h2 className="font-15 text-darkgray font-weight-600 pt-3">Order</h2>
      <span className="font-26 text-gray font-weight-100">$1,286</span>
      <p className="mt-2 mb-0 text-danger font-13 font-weight-500">
        <svg
          className="mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5L8.94588 3.94588L5.74549 7.14627V0H4.25451V7.14627L1.05412 3.94588L0 5L5 10L10 5Z"
            fill="#FF3E1D"
          />
        </svg>
        -13.24%
      </p>
    </div>
  );
};
export default DashboardOrder;
