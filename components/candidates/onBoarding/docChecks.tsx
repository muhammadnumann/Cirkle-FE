import PaginationBar from 'components/pagination/Pagination';
import React from 'react';
import CandidateListPageImpl from 'components/listPages/candidates/commonListPageComponents';
import ListPage from 'components/listpage';
const { columns, valueCalc, renderer, keyGenerator } = CandidateListPageImpl;

function DocChecks() {
  return (
    <>
      <div className=" pt-5 table-grid">
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

export default DocChecks;
