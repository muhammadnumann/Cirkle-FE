import { Table, Thead, Tbody, Th, Tr, Td, P } from 'components/CustomTable/CustomTable';
import React, { FC, useState } from 'react';
import remove from '/public/icons/remove.svg';
import Image from 'next/image';
import styles from '../../components/CustomTable/CustomTable.module.css';
import CustomCalender from '../CustomCalender';
import CustomDropdown, { Modal } from 'components/customDropdown';

const CustomTable: FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [tableData, setValue] = useState([
    {
      sr: 1,
      name: 'Project: Task',
      time1: '2:00 ',
      time2: '2:00 ',
      time3: '2:00 ',
      time4: '2:00 ',
      time5: '2:00 ',
      time6: '2:00 ',
      time7: '2:00 ',
      Total: 'Total',
      total: '10.00',
      isComponent: false,
      dash: '-',
      classname: 'project_task',
    },
    {
      sr: 2,
      name: 'Project: Task',
      time1: '2:00 ',
      time2: '2:00 ',
      time3: '2:00 ',
      time4: '2:00 ',
      time5: '2:00 ',
      time6: '2:00 ',
      time7: '2:00 ',
      Total: 'Total',
      total: '10.00',
      isComponent: false,
      dash: '-',
      classname: 'project_task',
    },
    {
      sr: 3,
      name: 'Project: Task',
      time1: '2:00 ',
      time2: '2:00 ',
      time3: '2:00 ',
      time4: '2:00 ',
      time5: '2:00 ',
      time6: '2:00 ',
      time7: '2:00 ',
      Total: 'Total',
      total: '10.00',
      isComponent: false,
      dash: '-',
      classname: 'project_task',
    },
  ]);
  const handleDelete = (index) => {
    const rows = [...tableData];
    rows.splice(index, 1);
    setValue(rows);
  };
  const row = {
    sr: 1,
    name: '<CustomDropdown/>',
    time1: '- ',
    time2: '- ',
    time3: '- ',
    time4: '- ',
    time5: '- ',
    time6: '- ',
    time7: '- ',
    Total: 'Total',
    total: '10.00',
    isComponent: true,
    dash: '-',
    classname: 'selectTask user-select-auto ',
  };

  const addRow = () => {
    setValue([...tableData, row]);
  };
  // console.log(addRow)
  return (
    <>
      <div className="d-flex align-items-center justify-content-between pt-1">
        <div>
          <h1 className="heading">Time Entries</h1>
        </div>
        <div className="me-5">
          <CustomCalender />
        </div>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <P className={`${styles.header_first_element}`}>Projects </P>
            </Th>
            <Th className={`${styles.header_active_element}`}>
              <P>Mon, Sep 26 </P>
            </Th>
            <Th>
              <P>Tue, Sep 27</P>
            </Th>
            <Th>
              <P>Wed, Sep 28 </P>
            </Th>
            <Th>
              <P>Thu, Sep 29 </P>
            </Th>
            <Th>
              <P>Fri, Sep 30 </P>
            </Th>
            <Th>
              <P>Sat, Oct 01 </P>
            </Th>
            <Th>
              <P>Sun, Oct 02 </P>
            </Th>
            <Th className={`${styles.green_bg}`}>
              <P> Total</P>
            </Th>
          </Tr>
        </Thead>
        <Tbody className="tbody">
          {tableData.map((val, index) => {
            return (
              <>
                <Tr key={`${index}`} className="position-relative">
                  <Td>
                    <P className={`${val.classname}`}>
                      {val.isComponent ? <CustomDropdown /> : val.name}
                    </P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}>{val.time1} </P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.time2}</P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.time3}</P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.time4}</P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.dash}</P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.time6}</P>
                  </Td>
                  <Td>
                    <P className={`${styles.p}`}> {val.dash}</P>
                  </Td>
                  <Td>
                    <P>{val.total} </P>
                  </Td>
                  <div className="w-100 position-absolute removeRow">
                    <Image
                      src={remove}
                      alt="Picture of the author"
                      onClick={() => handleDelete(index)}
                      className="cursor-pointer"
                    />
                  </div>
                </Tr>
              </>
            );
          })}
          <Tr className="position-relative">
            <Td>
              <P className={`${styles.project_task}`}>Total </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}>10.00 </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}>10.00 </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}>10.00 </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}>10.00 </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}> - </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}>10.00 </P>
            </Td>
            <Td>
              <P className={`${styles.p}`}> - </P>
            </Td>
            <Td>
              <P> </P>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <div className="d-flex align-items-center justify-content-between mt-3 p-4">
        <button
          className={` border-r-100 py-2 px-4 me-2 border-blue ${
            isActive ? 'bg-blue ' : 'bg-white '
          }`}
          onClick={() => {
            setIsActive(true);
            addRow();
          }}
        >
          <span
            className={
              isActive ? ' font-weight-600 font-12 text-white' : 'font-weight-600 font-12 text-blue'
            }
          >
            + Add Row to another task
          </span>
        </button>
        <button
          className={` border-r-100 py-2 px-4 border-blue me-5 ${
            isActive ? 'bg-white' : 'bg-blue'
          }`}
          onClick={() => setIsActive(false)}
        >
          <span
            className={
              isActive
                ? 'font-weight-600 font-12 text-blue '
                : ' font-weight-600 font-12  text-white'
            }
          >
            Submit For Approval
          </span>
        </button>
      </div>
      <Modal />
    </>
  );
};

export default CustomTable;
