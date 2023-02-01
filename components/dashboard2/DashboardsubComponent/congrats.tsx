import Trophy from 'components/icons/trophy';
import React from 'react';

const DashboardCongrats = () => {
  return (
    <div className="DashContainer">
      <div className="row">
        <div className="col-6">
          <h2 className="font-15 text-gray font-weight-100">Congratulations</h2>
          <p className="font-13 text-darkgray pt-2">Sales of the month</p>
          <span className="font-22 font-weight-100">$48.9k</span>
          <p className="font-13 font-weight-400 text-grey mt-1">78% of target</p>
          <button className={`salesbtn border-0 py-2 px-3`}>View Sales</button>
        </div>
        <div className="col-6">
          <Trophy />
        </div>
      </div>
    </div>
  );
};
export default DashboardCongrats;
