import { Table, Thead, Tbody, Th, Tr, Td, P } from 'components/CustomTable/CustomTable';
import React, { FC, useState } from 'react';
import TimeTrackingDropdown from './dropdown';

const TimeTracker: FC = () => {
  const [tableData] = useState([
    {
      sr: 1,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      time: '9:00 AM-11:30 AM ',
      duration: '2:30 hrs ',
    },
    {
      sr: 2,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      time: '9:00 AM-11:30 AM ',
      duration: '2:30 hrs ',
    },
    {
      sr: 3,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      time: '9:00 AM-11:30 AM ',
      duration: '2:30 hrs ',
    },
    {
      sr: 4,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      time: '9:00 AM-11:30 AM ',
      duration: '2:30 hrs ',
      actions: ': ',
    },
  ]);

  return (
    <>
      <div>
        <div>
          <div className="heading1">Time Tracker</div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-1">
          <div>
            <p className="font-weight-600 font-12 line-23 text-lightblack mb-3">This Week</p>
          </div>
          <div className="border-line"></div>
          <div>
            <p className="font-weight-600 font-12 line-23 text-lightblack mb-3">
              Total Time: <span className="green_color">00:00</span>
            </p>
          </div>
        </div>
      </div>
      <Table className="timeTrackerTable">
        <Thead>
          <Tr>
            <Th>
              <P className="timeTrackerHead">Project: Task </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Date </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Time</P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Duration </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Actions </P>
            </Th>
          </Tr>
        </Thead>
        <Tbody className="timeTrackerBody">
          {tableData.map((val, index) => {
            return (
              <>
                <Tr key={`${index}`}>
                  <Td>
                    <P className="timeTrackerTd">{val.name} </P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd">{val.date} </P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd"> {val.time}</P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd"> {val.duration}</P>
                  </Td>
                  <Td className="position-relative pt-3 pb-0 ps-0 pe-0 ">
                    <TimeTrackingDropdown />
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>

      <div className="mt-2">
        <div className="d-flex align-items-center justify-content-between pt-1">
          <div>
            <p className="font-weight-600 font-12 line-23 text-lightblack mb-3">Last Week</p>
          </div>
          <div className="border-line"></div>
          <div>
            <p className="font-weight-600 font-12 line-23 text-lightblack mb-3">
              Total Time: <span className="green_color">00:00</span>
            </p>
          </div>
        </div>
      </div>
      <Table className="timeTrackerTable">
        <Thead>
          <Tr>
            <Th>
              <P className="timeTrackerHead">Project: Task </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Date </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Time</P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Duration </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Actions </P>
            </Th>
          </Tr>
        </Thead>
        <Tbody className="timeTrackerBody">
          {tableData.map((val, index) => {
            return (
              <>
                <Tr key={`${index}`}>
                  <Td>
                    <P className="timeTrackerTd">{val.name} </P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd">{val.date} </P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd"> {val.time}</P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd"> {val.duration}</P>
                  </Td>
                  <Td className="position-relative pt-3 pb-0 ps-0 pe-0 ">
                    <TimeTrackingDropdown />
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default TimeTracker;
