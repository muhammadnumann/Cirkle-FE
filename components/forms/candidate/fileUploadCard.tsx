import PdfIcon from 'components/icons/pdf';
import React from 'react';
import FileUploadDropBtn from './fileUploadCardDropDown';

const CandidateFileUploadCard = () => {
  return (
    <>
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-3 ps-0 bg-white p-4 file-upload-card">
            <div className="row">
              <div className="col-3 p-0">
                <div className="p-2 ms-4 bg-light-pink rounded">
                  <PdfIcon />
                </div>
              </div>
              <div className="col-9">
                <div className="d-flex justify-content-between  align-items-center">
                  <p className="font-12 line-27 m-0 font-weight-400 font-dark-grey">Added by</p>
                  <FileUploadDropBtn />
                </div>
                <p className="font-18 line-27 font-black m-0 font-weight-600 pb-2">
                  Lindsey Bergson
                </p>
                <p className="font-12 line-27  m-0 font-weight-400 font-dark-grey">Added on</p>
                <p className="font-18 line-27 font-black m-0 font-weight-600">MM/DD/YYYY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CandidateFileUploadCard;
