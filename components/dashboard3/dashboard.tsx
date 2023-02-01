import CustomCalender from 'components/CustomCalender';
import CustomDatePicker from 'components/DatePicker';
import React from 'react';
import LineChart from './charts/LineChart';
import { ProgressBar } from './charts/ProgressBar';
import DonutChart from './SubComponents/DonutChart';
import Earnings from './SubComponents/Earnings';
import TotalHoursWorked from './SubComponents/TotalHoursWorked';
import UpcomingEvents from './SubComponents/UpcomingEvents';
import clock from '../../public/icons/clock.svg';
import projectsWorkedOn from '../../public/icons/projectsWorkedOn.svg';
import CompletedTasks from '../../public/icons/CompletedTasks.svg';
import nonWorkingDay from '../../public/icons/nonWorkingDay.svg';

export default function dashboard() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between pt-1">
        <div>
          <h1 className=" font-20 font-weight-600 line-23 text-lightblack">Welcome Username,</h1>
        </div>
        <div className="me-5">
          <CustomCalender />
        </div>
      </div>
      <div className="row w-100 d-flex px-3 mt-3 ">
        <div className="col-xl-4 col-md-4 col-12 ">
          <Earnings />
        </div>
        <div className="col-xl-8 col-md-8 col-12 ">
          <div className="row d-flex  ">
            <div className=" col-6 px-3 mb-2 mt-2">
              <TotalHoursWorked
                title="Total hours worked"
                value="+25% "
                time="23:00"
                className="TotalHoursWorked"
                textColor="text-greenish"
                src={clock}
              />
            </div>
            <div className=" col-6 px-3 mb-2 mt-2">
              <TotalHoursWorked
                title="Projects worked on"
                value="-1% "
                time="05"
                textColor="text-red"
                src={projectsWorkedOn}
              />
            </div>
            <div className=" col-6 px-3  mt-3">
              <TotalHoursWorked
                title="Completed tasks "
                value="+5% "
                time="20"
                textColor="text-greenish"
                src={CompletedTasks}
              />
            </div>
            <div className=" col-6 px-3  mt-3">
              <TotalHoursWorked
                title="Non working day"
                value="-1% "
                time="02"
                textColor="text-red"
                src={nonWorkingDay}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row w-100 d-flex mt-4 px-3">
        <div className="col-xl-8 col-md-8 col-12  ">
          <UpcomingEvents />
        </div>
        <div className="col-xl-4 col-md-4 col-12">
          <DonutChart />
        </div>
      </div>
      <div className="row w-100 d-flex px-4">
        <div className="LineChart p-3 bg-white rounded-20 mt-3">
          <div className="d-flex align-items-center justify-content-between pt-1">
            <div className="d-flex">
              <div className="font-weight-500 font-15 line-22 text-gray mt-2">
                Total Tasks Activity
              </div>
              <div className="ms-3">
                <CustomDatePicker />
              </div>
            </div>
            <div className=" w-25">
              <div className="font-14 font-weight-700 line-20 text-greenish">60%</div>
              <ProgressBar />
            </div>
          </div>
          <div className="font-weight-700 font-24 line-34 text-black">48</div>
          <div className="LineChartHeight">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}
