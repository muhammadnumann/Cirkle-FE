import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useState } from 'react';
const ContactSidebar = dynamic(
  () => import('../../../components/contacts/contactSidebar/contactSidebar')
);
const GeneralInformation = dynamic(() => import('../../../components/contacts/general'));
const WorkInformation = dynamic(() => import('../../../components/contacts/work'));
const ContactInformation = dynamic(() => import('../../../components/contacts/contact'));
const CompanyDetails = dynamic(
  () => import('../../../components/contacts/company_details/company-detail')
);
const EmailPermissionDetail = dynamic(() => import('../../../components/contacts/email'));
const GroupsDetail = dynamic(() => import('../../../components/contacts/group'));
const ContactActivity = dynamic(() => import('../../../components/contacts/activity'));
const ContactCommuncication = dynamic(() => import('../../../components/contacts/communication'));
const ContactNotes = dynamic(() => import('../../../components/contacts/notes'));

export default function ContactDetail() {
  const [tabCounter, setTabCounter] = useState(0);
  return (
    <>
      <Head>
        <title>Contact Detail</title>
      </Head>
      <div className="grid-page mt-3">
        <div className="grid-sidebar">
          <ContactSidebar setTabCounter={setTabCounter} tabCounter={tabCounter} />
        </div>
        <div className={`grid-content w-100`}>
          {tabCounter === 0 && <GeneralInformation />}
          {tabCounter === 1 && <WorkInformation />}
          {tabCounter === 2 && <ContactInformation />}
          {tabCounter === 3 && <CompanyDetails />}
          {tabCounter === 4 && <EmailPermissionDetail />}
          {tabCounter === 5 && <GroupsDetail />}
          {tabCounter === 6 && <ContactActivity />}
          {tabCounter === 7 && <ContactCommuncication />}
          {tabCounter === 8 && <ContactNotes />}
        </div>
      </div>
    </>
  );
}
