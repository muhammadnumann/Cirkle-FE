import React from 'react';
import Dounught from '../chart/dounught';

const DashboardGuage = () => {
  return (
    <div className={`DashContainer text-center position-relative px-5`}>
      <p>Your score is</p>
      <h2 className="font-15 text-darkgray">Awesome</h2>
      <Dounught />
      <div className="text-center guage-reading">
        <span className="font-26 text-gray font-weight-100">78</span>
        <p className="font-13 font-weight-400 text-darkgray">Out of 100</p>
      </div>
      <p>Your score is based on the last</p>
      <p>287 Transactions</p>
      <button className={`salesbtn border-0 py-3 px-3 w-100`}>View my Account</button>
    </div>
  );
};
export default DashboardGuage;
