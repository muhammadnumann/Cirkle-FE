import React from 'react';
import styles from './table.module.css';
const Table = () => {
  const tdCanvas = {
    height: '12px',
    width: '100%',
  };
  const tableData = [
    {
      sr: 1,
      name: '1',
      sales: { sale: '46%', bg: 'rgba(252, 184, 89, 0.12)', color: 'rgba(252, 184, 89, 1)' },
    },
    {
      sr: 2,
      name: '2',
      sales: { sale: '17%', bg: 'rgba(169, 223, 216, 0.12)', color: 'rgba(169, 223, 216, 1)' },
    },
    {
      sr: 3,
      name: '3',
      sales: { sale: '19%', bg: 'rgba(40, 174, 243, 0.12)', color: 'rgba(40, 174, 243, 1)' },
    },
    {
      sr: 4,
      name: '4',
      sales: { sale: '29%', bg: 'rgba(242, 200, 237, 0.12)', color: 'rgba(242, 200, 237, 1)' },
    },
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Reach</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {tableData.map((val, index) => {
          const design = {
            backgroundColor: val.sales.bg,
            color: val.sales.color,
            borderColor: val.sales.color,
          };
          const progress = {
            backgroundColor: val.sales.color,
            width: val.sales.sale,
          };
          return (
            <tr key={`${index}-asd`}>
              <td className={styles.sr}>{val.sr}</td>
              <td>Name {val.name}</td>
              <td className={styles.reach}>
                <div style={tdCanvas}>
                  <div className={`w-100 ${styles.prgoressbar}`}>
                    <div style={progress}></div>
                  </div>
                </div>
              </td>
              <td>
                <span className={`${styles.sales} px-sm-2 px-1 py-1`} style={design}>
                  {val.sales.sale}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
