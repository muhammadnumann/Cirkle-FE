import React from 'react';

const DashboardTable = () => {
  const data = [
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Confirmed',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Completed',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Cancelled',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Completed',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Completed',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Confirmed',
    },
    {
      heading1: 'Sub Heading',
      date: 'Date',
      heading2: 'One',
      Payement: {
        first: '$120',
        sec: '499',
      },
      status: 'Completed',
    },
  ];
  return (
    <>
      <table className="table p-0">
        <thead>
          <tr>
            <th className="text-gray font-12 font-weight-600" scope="col">
              HEADING
            </th>
            <th className="text-gray font-12 font-weight-600" scope="col">
              HEADING
            </th>
            <th className="text-gray font-12 font-weight-600" scope="col">
              PAYMENT
            </th>
            <th className="text-gray font-12 font-weight-600" scope="col">
              STATUS
            </th>
            <th className="text-gray font-12 font-weight-600" scope="col">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index} className="">
                <th scope="row" className="d-flex align-items-center justify-content-start">
                  <div className="userimg"></div>
                  <div className="ms-2">
                    <p className="font-15 font-weight-600 text-darkgray mb-0">{val.heading1}</p>
                    <p className="font-13 font-weight-400 .text-lightgray2 m-0">{val.date}</p>
                  </div>
                </th>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="oneCircle"></div>
                    <p className="font-15 font-weight-400 ms-2 mb-0">One</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <p className="font-15 font-weight-600 text-purple m-0">{val.Payement.first}</p>
                    <p className="font-15 font-weight-600 text-lightgray2 m-0">
                      /{val.Payement.sec}
                    </p>
                  </div>
                  <p className="m-0">Partially Paid</p>
                </td>
                <td>
                  <p
                    className={`${val.status === 'Confirmed' ? 'bg-purple' : 'bg-green'} border-4 
                                    text-13 font-weight-500 mb-0 text-center py-1`}
                  >
                    <span
                      className={`${val.status === 'Confirmed' ? 'text-purple' : 'text-green'} `}
                    >
                      {val.status}
                    </span>
                  </p>
                </td>
                <td>;</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default DashboardTable;
