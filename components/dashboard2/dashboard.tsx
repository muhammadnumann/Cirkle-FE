import React from 'react';
import dynamic from 'next/dynamic';

const DashboardCongrats = dynamic(() => import('./DashboardsubComponent/congrats'));
const DashboardExpences = dynamic(() => import('./DashboardsubComponent/expences'));
const DashboardFinanceSummary = dynamic(() => import('./DashboardsubComponent/financeSummary'));
const DashboardGuage = dynamic(() => import('./DashboardsubComponent/guageComponent'));
const DashboardOrder = dynamic(() => import('./DashboardsubComponent/Order'));
const DashboardSales = dynamic(() => import('./DashboardsubComponent/sales'));
const TotalBalance = dynamic(() => import('./DashboardsubComponent/totalBalance'));
const DashboardTransactions = dynamic(() => import('./DashboardsubComponent/transaction'));
const DashboardTable = dynamic(() => import('./DashboardsubComponent/table'));

const Dashboard = () => {
  return (
    <>
      <div className="row w-100 ps-2 pt-4 justify-content-center">
        <div className="col-xl-4 col-md-6 col-12 ">
          <DashboardCongrats />
        </div>
        <div className="col-xl-2 col-md-3 col-6 py-2 mt-md-0 mt-3">
          <DashboardOrder />
        </div>
        <div className="col-xl-2 col-md-3 col-6 py-2 mt-md-0 mt-3">
          <DashboardSales />
        </div>
        <div className="col-xl-2 col-md-4 col-6 py-2 mt-xl-0 mt-3">
          <DashboardExpences />
        </div>
        <div className="col-xl-2 col-md-4 col-6 py-2 mt-xl-0 mt-3">
          <DashboardTransactions />
        </div>
      </div>
      <div className="row w-100 ps-2 pt-4">
        <div className="col-xl-8 col-md-7 col-12">
          <DashboardFinanceSummary />
        </div>
        <div className="col-xl-4 col-md-5 col-12 mt-md-0 mt-4">
          <DashboardGuage />
        </div>
      </div>
      <div className="row w-100 ps-2 pt-4">
        <div className="col-xl-8 col-12">
          <div className={`DashContainer p-0`}>
            <DashboardTable />
          </div>
        </div>
        <div className="col-xl-4 col-12 mt-xl-0 mt-4">
          <TotalBalance />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
