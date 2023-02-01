import React from 'react';
// import './loadingpage.css';

const LoadingPage = () => {
  return (
    <div className="loadingpage">
      <div className="container-md">
        <div className="row mx-0">
          <div className="col-md-3 col-sm-4 col-5 pl-0 pr-md-5 pr-4">
            <div
              className="bgcolor d-flex flex-column align-items-center"
              style={{ height: '90vh' }}
            >
              <div
                className="rounded-circle circle w-75 bg-white mt-5"
                style={{ height: '190px' }}
              ></div>
              <div className="w-75 bg-white mt-5" style={{ height: '80px' }}></div>
              <div className="w-75 bg-white mt-5" style={{ height: '80px' }}></div>
              <div className="w-75 bg-white mt-5 mb-4" style={{ height: '80px' }}></div>
            </div>
          </div>
          <div className="col-md-9 col-sm-8 col-7 p-0">
            <div className="row bg-white w-100 m-0" style={{ marginBottom: '-1px' }}>
              <div className="col-4 pl-0 pr-4">
                <div className="bgcolor" style={{ height: '61px' }}></div>
              </div>
              <div className="col-4 px-2">
                <div className="bgcolor" style={{ height: '61px' }}></div>
              </div>
              <div className="col-4 pr-0 pl-4">
                <div className="bgcolor" style={{ height: '61px' }}></div>
              </div>
            </div>
            <div className="pb-md-5 pb-sm-4 pb-3 w-100"></div>
            <div className="col-12 bgcolor" style={{ height: '75vh' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
