import React from 'react';

const DashboardExpences = () => {
  return (
    <div className="DashContainer">
      <h2 className="font-15 text-darkgray font-weight-600">Expenses</h2>
      <div className="w-100 expences d-flex align-items-center justify-content-center position-relative mt-3">
        <div className="position-absolute bg-darkpurple expences-top"></div>
        <div className="position-absolute bg-darkpurple expences-left"></div>
        <div className="position-absolute bg-darkpurple expences-right"></div>
        <div className="position-absolute bg-darkpurple expences-bottom"></div>
        <div className="expences-content d-flex flex-column align-items-center text-center">
          <div className="position-relative">
            <div className="expences-circle "></div>
          </div>
          <span className="font-22 font-weight-100 text-darkgray">72%</span>
          <p className="font-11 mx-lg-2 mx-3 wraptext2">$21k Expenses more than last month</p>
        </div>
      </div>
    </div>
  );
};
export default DashboardExpences;
