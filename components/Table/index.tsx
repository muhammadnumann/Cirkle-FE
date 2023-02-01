import React from 'react';
import styles from './table.module.css';
const Table = () => {
  const tableData = [
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
      dash: '-',
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
    },
    {
      sr: 4,
      name: 'Total',
      time1: '10:00 ',
      time2: '10:00 ',
      time3: '10:00 ',
      time4: '10:00 ',
      dash: '- ',
      time6: '10:00 ',
      dash2: '-',
      Total: 'Total',
      total: '',
    },
  ];

  return (
    <div className={styles.main}>
      <table className={`${styles.table_spacing} table`}>
        <thead className={`${styles.thead}`}>
          <tr>
            <th scope="col">
              <p className={`${styles.header} project`}>Projects</p>
            </th>
            <th scope="col" className={`${styles.head_element}`}>
              <p className={styles.header}> Mon, Sep 26</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Tue, Sep 27</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Wed, Sep 28</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Thu, Sep 29</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Fri, Sep 30</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Sat, Oct 01</p>
            </th>
            <th scope="col">
              <p className={styles.header}>Sun, Nov 02</p>
            </th>
            <th scope="col" className={`${styles.total_bg}`}>
              <p className={styles.header}>Total</p>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {tableData.map((val, index) => {
            return (
              <>
                <tr key={`${index}`} className={styles.tr}>
                  <td>
                    <p className={`${styles.name}`}>{val.name}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time1}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time2}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time3}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time4}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.dash}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time6}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.time6}</p>
                  </td>
                  <td>
                    <p className={styles.p}>{val.total}</p>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
