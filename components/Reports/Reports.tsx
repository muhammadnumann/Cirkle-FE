import PdfBlueIcon from 'components/icons/pdfBlueIcon';
import React from 'react';
import ReportCard from './ReportCard';

const Reports = () => {
  return (
    <>
      <div className="report col-lg-4 rounded col-md-6 col-12 ">
        <div className="w-100 h-100 ps-0 p-4 rounded-20 ">
          <div className=" w-100 h-100 p-4  ps-0 bg-white shadow-report rounded-10">
            <div className="row">
              <div className="col-3 p-0">
                <div className="p-2 me-3 mt-1 ms-4 bg-yellow rounded">
                  <PdfBlueIcon />
                </div>
              </div>
              <div className="col-9">
                <div className="d-flex justify-content-between  align-items-center">
                  <p className="font-13 line-20 m-0 font-weight-400 font-dark-grey">Report ID</p>
                  <div>
                    <ReportCard />
                  </div>
                </div>
                <p className="font-20 line-29 font-black m-0 py-2 font-weight-600 pb-2">#123456</p>
                <p className="font-13 line-20  m-0 font-weight-400 font-dark-grey">Added on</p>
                <p className="font-15 line-22 font-black m-0 font-weight-500">MM/DD/YYYY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reports;
