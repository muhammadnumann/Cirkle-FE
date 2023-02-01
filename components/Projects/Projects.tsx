import CustomPagination from 'components/CustomPagination/CustomPagination';
import { Table, Thead, Tbody, Th, Tr, Td, P } from 'components/CustomTable/CustomTable';
import React, { FC, useState } from 'react';
import TimeTrackingDropdown from './Dropdown';

const Projects: FC = () => {
  const [tableData] = useState([
    {
      sr: 1,
      name: 'Project 1',
      date: 'MM/DD/YYYY ',
      tasks: '4 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 2,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '12 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 3,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '2 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 4,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '10 ',
      duration: '2:30 hrs ',
      actions: ': ',
    },
    {
      sr: 5,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '2 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 6,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '10 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 7,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '2 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 8,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '10 ',
      duration: '2:30 hrs ',
      actions: ': ',
    },
    {
      sr: 9,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '2 ',
      duration: '2:30 hrs ',
    },
    {
      sr: 10,
      name: 'Project: Task',
      date: 'MM/DD/YYYY ',
      tasks: '10 ',
      duration: '2:30 hrs ',
    },
  ]);
  // const handleDelete = (index) => {
  //   const rows = [...tableData];
  //   rows.splice(index, 1);
  //   setValue(rows);
  // };

  return (
    <>
      <div className=" pt-1 py-3">
        <div className="heading1">Projects</div>
        {/* <div
            <button className={` border-r-100 py-2 px-4 border-blue  ${'bg-blue'}`}>
              <span className={' font-weight-600 font-12  text-white'}>Add Project</span>
            </button>
          </div> */}
      </div>
      <Table className="timeTrackerTable">
        <Thead>
          <Tr>
            <Th>
              <P className="timeTrackerHead">Project Name </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Date Added </P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Tasks Running</P>
            </Th>
            <Th>
              <P className="timeTrackerHead">Total Time Spent </P>
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
                    <P className="timeTrackerTd"> {val.tasks}</P>
                  </Td>
                  <Td>
                    <P className="timeTrackerTd"> {val.duration}</P>
                  </Td>
                  <Td className="position-relative pt-3 pb-0 ps-0 pe-0">
                    <TimeTrackingDropdown />
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
      <div className="pt-4">
        <CustomPagination currentPage={1} pageCount={10} onPageChange={() => true} />
      </div>
    </>
  );
};

export default Projects;
