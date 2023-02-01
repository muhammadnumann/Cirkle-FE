import BillingOptionsForm from 'components/candidates/onBoarding/billingOptions';
import React, { useState } from 'react';
import CandidateTabs from '../candidateTabsContent/candidateTabs';
import CompanyDetail from './companyDetail';
import DocChecks from './docChecks';
import LicenseDBSDetail from './LicenseDBS';
import PayrollDetail from './payrollDetail';
import AddNewComponent from '../../../components/forms/addNew';

export default function CandidateOnboarding() {
  const [isCompanyDetail, setIsCompanyDetail] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  // const [isWork, setIsWork] = useState(false);

  const data = [
    {
      TabName: 'Payroll-Details',
      description: 'Payroll Details',
      isbtn: false,
    },
    {
      TabName: 'Company-Details',
      description: 'Company Details',
      isbtn: true,
      btnText: 'Add New',
      setIsSelected: setIsCompanyDetail,
    },
    {
      TabName: 'License-DBS-Details',
      description: 'License & DBS Details',
      isbtn: false,
    },
    {
      TabName: 'Doc-Checks',
      description: 'Doc Checks',
      isbtn: true,
      btnText: 'Add New Document',
      setIsSelected: setIsDocument,
    },
    {
      TabName: 'Billing-Options',
      description: 'Billing Options',
      isbtn: true,
      btnText: 'How It Works',
      // setIsSelected: setIsWork
    },
  ];

  const components = [
    {
      value: <PayrollDetail />,
    },
    {
      value: <CompanyDetail />,
    },
    {
      value: <LicenseDBSDetail />,
    },
    {
      value: <DocChecks />,
    },
    {
      value: <BillingOptionsForm />,
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="candidate-header">
        <CandidateTabs data={data} setCount={setCount} />
        <div className="line mt-3"></div>
      </div>
      <div className="tab-content h-92 " id="pills-tabContent">
        {components.map((v, i) => {
          return count === i && v.value;
        })}
      </div>
      {isCompanyDetail && (
        <AddNewComponent setIsSelected={setIsCompanyDetail} Name="Add Company Detail" />
      )}
      {isDocument && <AddNewComponent setIsSelected={setIsDocument} Name="Add isDocumnet" />}
      {/* {isWork && <WorkSheetModel />} */}
    </>
  );
}
