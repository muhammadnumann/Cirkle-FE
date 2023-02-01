import CandidateWorkHistory from 'components/forms/candidate/workHistory';
import WorkHistoryIcon from 'components/icons/workHistory';
import ListPage from 'components/listpage';
import React from 'react';
import CandidateListPageImpl from 'components/listPages/candidates/commonListPageComponents';
import PaginationBar from 'components/pagination/Pagination';

const { columns, valueCalc, renderer, keyGenerator } = CandidateListPageImpl;

function WorkHistory() {
  return (
    <>
      <div className="pt-4">
        <div className="bg-light-pink border-r-20 py-3">
          <div className="row">
            <div className="col-3">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <WorkHistoryIcon />
              </div>
            </div>
            <CandidateWorkHistory />
          </div>
        </div>
      </div>
      <div className=" mt-4 pt-2 table-grid h-75">
        <ListPage
          listContainerClassName="table-results"
          columns={columns}
          items={[{ fullName: 'bilal', id: 1 }, { id: 2 }]}
          valueCalc={valueCalc}
          renderer={renderer}
          keyGenerator={keyGenerator}
        />
        <div className="table-pagination">
          <PaginationBar currentPage={1} pageCount={1} onPageChange={() => true} />
        </div>
      </div>
    </>
  );
}

export default WorkHistory;
