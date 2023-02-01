import CustomCalender from 'components/CustomCalender';
import Reports from 'components/Reports/Reports';
import React from 'react';

export default function index() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between pt-1">
        <div>
          <h1 className="font-weight-600 font-20 line-23">Reports</h1>
        </div>
        <div>
          <CustomCalender />
        </div>
      </div>
      <div className="Container">
        <div className="row">
          <Reports />
          <Reports />
          <Reports />
          <Reports />
          <Reports />
          <Reports />
        </div>
      </div>
    </>
  );
}
