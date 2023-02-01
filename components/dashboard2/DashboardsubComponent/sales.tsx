import React from 'react';
import { BarCart } from '../chart/barchart';

const DashboardSales = () => {
  return (
    <div className="DashContainer">
      <h2 className="font-15 text-darkgray font-weight-600">Sales</h2>
      <span className="font-26 font-weight-100">482k</span>
      <br />
      <span className="font-13 font-weight-500 bg-skyblue px-2 border-4 text-skyblue">+34%</span>
      <p className="text-lightgray2 font-13 font-weight-400 mt-3 mb-1">Sales Target</p>
      <div className="w-100 d-flex align-items-center">
        <BarCart />
        <p className="font-13 font-weight-400 text-lightgray d-inline ">78%</p>
      </div>
    </div>
  );
};
export default DashboardSales;
