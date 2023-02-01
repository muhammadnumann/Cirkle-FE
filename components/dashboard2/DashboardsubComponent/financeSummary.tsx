import Users from 'components/icons/users';
import React from 'react';
import { BarCart } from '../chart/barchart';

const DashboardFinanceSummary = () => {
  return (
    <div className={`DashContainer d-flex flex-column`}>
      <div className="row mt-3">
        <h2 className="font-15 text-darkgray font-weight-100">Finance Summary</h2>
        <p className="font-13 font-weight-400">Check out each column for more details</p>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <h3 className="font-13 font-weight-400 text-darkgray">Annual Companies Taxes</h3>
          <p className="font-15 font-weight-100 text-gray">$500,00</p>
        </div>
        <div className="col-8">
          <h3 className="font-13 font-weight-400 text-darkgray">Next Tax Review Date</h3>
          <p className="font-15 font-weight-100 text-gray">July 24,2021</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <h3 className="font-13 font-weight-400 text-darkgray">Average Product Price</h3>
          <p className="font-15 font-weight-100 text-gray">$89.90</p>
        </div>
        <div className="col-8">
          <h3 className="font-13 font-weight-400 text-darkgray">Satisfaction Rate</h3>
          <BarCart />
        </div>
      </div>
      <div className="row align-items-center mt-5">
        <div className="col-6">
          <Users />
        </div>
        <div className="col-6">
          <span className="border-4 bg-purple text-purple px-2 py-1 font-13 font-weight-500">
            5 DAYS AGO
          </span>
        </div>
      </div>
    </div>
  );
};
export default DashboardFinanceSummary;
