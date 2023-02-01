import ListPage from 'components/listpage';
import PaginationBar from 'components/pagination/Pagination';
import React, { useState } from 'react';
import FormInputs from '../../forms/form';
import CandidateListPageImpl from 'components/listPages/candidates/commonListPageComponents';
import ImportantNote from 'components/importantNote';

const { columns, valueCalc, renderer, keyGenerator } = CandidateListPageImpl;

function BillingOptionsForm() {
  const [isActive, setIsActive] = useState(true);
  const [umbrellabtn, setUmbrella] = useState(false);

  const filter = {
    type: 'select',
    options: ['Filter by type', 'sec', 'third'],
    info: '-',
    placeholder: '',
  };
  const InputData = [
    {
      label: 'Candidate company name',
      type: 'text',
      placeholder: 'Enter Here',
    },
    {
      label: 'Candidate comp',
      type: 'text',
      placeholder: 'Enter here',
    },
    {
      label: 'Candidate company email',
      type: 'text',
      placeholder: 'Enter here',
    },
    {
      label: 'Candidate company email',
      type: 'radio',
      radio1: 'Disable',
      radio2: 'Enable',
      placeholder: 'Enter here',
    },
  ];

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-4 pt-1">
        <div>
          <button
            className={`border-gradient border-r-100 py-2 px-4 me-2 ${
              isActive ? 'bg-light-pink' : ''
            }`}
            onClick={() => setIsActive(true)}
          >
            <span className={isActive ? 'text-gradient font-weight-600' : 'font-weight-400'}>
              Umbrella Pay Here
            </span>
          </button>
          <button
            className={`border-gradient border-r-100 py-2 px-4 ${isActive ? '' : 'bg-light-pink'}`}
            onClick={() => setIsActive(false)}
          >
            <span className={isActive ? 'font-weight-400' : 'text-gradient font-weight-60'}>
              LTD CO. or Corporation pay type
            </span>
          </button>
        </div>
        {umbrellabtn ? (
          <div className="d-flex align-items-center">
            <div className="gradient-outline filter-w">
              <FormInputs
                type={filter.type}
                info={filter.info}
                isSelected={true}
                placeholder={filter.placeholder}
                ClassName=" mb-0 bg-transparent text-black"
              />
            </div>
            <button className="globle-gradient-btn border-r-6" onClick={() => setUmbrella(false)}>
              {' '}
              Upload
            </button>
          </div>
        ) : (
          <button className="globle-gradient-btn border-r-6" onClick={() => setUmbrella(true)}>
            {' '}
            Manage Umbrella Company
          </button>
        )}
      </div>
      <div className="line mt-3"></div>

      <div className="row mt-4">
        {InputData.map((val, index) => {
          return (
            <div key={index} className="col-lg-3 col-sm-6 col-12">
              <FormInputs
                label={val.label}
                type={val.type}
                isSelected={true}
                placeholder={val.placeholder}
                radioOption={['Yes', 'No']}
              />
            </div>
          );
        })}
      </div>
      <div className=" mt-4 pt-2 table-grid" style={{ height: '70%' }}>
        <ListPage
          listContainerClassName="overflow-auto"
          columns={columns}
          items={[{ fullName: 'bilal', id: 1 }, { id: 2 }]}
          valueCalc={valueCalc}
          renderer={renderer}
          keyGenerator={keyGenerator}
        />
        <div className="mt-3 position-relative">
          <ImportantNote />
          <PaginationBar currentPage={1} pageCount={1} onPageChange={() => true} />
        </div>
      </div>
    </>
  );
}

export default BillingOptionsForm;
