import CustomDatePicker from 'components/DatePicker';
import React from 'react';
import DoughnutChart from '../charts/DoughnutChart';

export default function DonutChart() {
  return (
    <>
      <div className="DonutChart rounded-20 bg-white  pt-1 p-3 m-0 pb-0">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="font-weight-400 font-12 line-18 text-gray">Projects till Now</div>
          </div>
          <div className="donutHeader calender-z">
            <CustomDatePicker />
          </div>
        </div>
        <span className="font-weight-700 font-24 line-34 text-black">15</span>
        <div className="donut-chart ">
          <DoughnutChart />
        </div>
        <div className="d-flex justify-content-evenly donutFooter">
          <div className="">
            <span className="DonutBulletGreen rounded-circle"></span>Done
          </div>
          <div className="">
            <span className="DonutBulletOrange rounded-circle"></span> Inprogress
          </div>
        </div>
      </div>
    </>
  );
}
