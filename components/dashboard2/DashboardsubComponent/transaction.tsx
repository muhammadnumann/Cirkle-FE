import Wallet from 'components/icons/wallet';
import React from 'react';

const DashboardTransactions = () => {
  return (
    <div className="DashContainer">
      <Wallet />
      <h2 className="font-15 text-darkgray font-weight-600 mt-3">Transactions</h2>
      <span className="font-22 font-weight-100 text-darkgray">$14,854</span>
      <p className="font-13 font-weight-500 text-green mt-3">
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
            d="M4.28566 3.15274V9.99989H5.71423V3.15274L8.78066 6.21917L9.79066 5.20917L4.99994 0.418457L0.209229 5.20917L1.21923 6.21917L4.28566 3.15274Z"
            fill="#71DD37"
          />
        </svg>
        +28.14%
      </p>
    </div>
  );
};
export default DashboardTransactions;
