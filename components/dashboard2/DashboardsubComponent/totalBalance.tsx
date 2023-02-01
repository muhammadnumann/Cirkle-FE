import Dollar from 'components/icons/Dollar';
import Wallet2 from 'components/icons/wallet2';
import React from 'react';
import LineChart from '../chart/LineChart';

const TotalBalance = () => {
  return (
    <div className="DashContainer">
      <h2 className="font-15 text-darkgray">Total Balance</h2>
      <div className="row mt-4 mb-5">
        <div className="col-6">
          <div className="d-flex align-items-center justify-content-center">
            <div className="border-6 bg-wallet d-flex align-items-center justify-content-center">
              <Wallet2 />
            </div>
            <div className="ms-2">
              <p className="font-18 font-weight-100 text-gray mb-2">$254K</p>
              <p className="font-13 font-weight-400 text-lightgray mb-0">Wallet</p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="d-flex align-items-center justify-content-center">
            <div className="border-6 bg-dollar d-flex align-items-center justify-content-center">
              <Dollar />
            </div>
            <div className="ms-2">
              <p className="font-18 font-weight-100 text-gray mb-2">$254K</p>
              <p className="font-13 font-weight-400 text-lightgray mb-0">Wallet</p>
            </div>
          </div>
        </div>
      </div>
      <LineChart />
      <div className="my-4 row align-items-center w-100">
        <div className="col-10">
          <p>You have done 57.6% more sales. Check your new badge in your profile.</p>
        </div>
        <div className="col-2">
          <div className="border-6 bg-wallet d-flex align-items-center justify-content-center">
            <Wallet2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TotalBalance;
