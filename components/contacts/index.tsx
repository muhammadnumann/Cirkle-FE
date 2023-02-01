import {
  CustomRenderer,
  CustomValueCalc,
  KeyGenerator,
  ListPage,
  TableHeaders,
} from 'components/listpage';
import { useAPIContext } from 'context/api';
import { v1ListContactsResponse } from 'internal/fetcher/types';
import { ArrElement } from 'internal/types/types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ContactsTabs from './contactstabs';

const PaginationBar = dynamic(() => import('components/pagination/Pagination'));
const FilterIcon = dynamic(() => import('components/icons/list/filter'));

const getQueryKey = (lastSeenID: number, limit: number): [string, number, number] => [
  'clients',
  lastSeenID,
  limit,
];

type ResponseContact = ArrElement<v1ListContactsResponse['contacts']>;

type Columns = {
  sNum: never;
  fullName: never;
  company: never;
  email: never;
  personalEmail: never;
  homePhone: never;
  mobilePhone: never;
};

const columns: TableHeaders<Columns> = {
  sNum: { text: 'S.NO', sortable: false },
  fullName: { text: 'FULL NAME', sortable: true },
  company: { text: 'COMPANY', sortable: true },
  email: { text: 'EMAIL', sortable: true },
  personalEmail: { text: 'PERSONAL EMAIL', sortable: true },
  homePhone: { text: 'HOME PHONE', sortable: true },
  mobilePhone: { text: 'MOBILE PHONE', sortable: true },
};

const valueCalc: CustomValueCalc<Columns, ResponseContact> = {
  sNum: ({ contact }) => contact.id,
  fullName: ({ contact }) => contact.fullName,
  company: ({ client }) => client?.clientEntityName ?? '--',
  email: ({ contact }) => contact?.email ?? '--',
  personalEmail: ({ contact }) => contact?.personalEmail ?? '--',
  homePhone: ({ contact }) => contact?.homePhone ?? '--',
  mobilePhone: ({ contact }) => contact?.mobilePhone ?? '--',
};

const customRenderer: CustomRenderer<Columns, ResponseContact> = {
  sNum: ({ contact }) => <span>{`${contact.id}.`}</span>,
  fullName: ({ contact }) => (
    <div className="fullName">
      <span>{contact.fullName}</span>
    </div>
  ),
  company: ({ client }) => <span>{client?.clientEntityName ?? '--'}</span>,
  email: ({ contact }) => <span>{contact?.email ?? '--'}</span>,
  personalEmail: ({ contact }) => <span>{contact?.personalEmail ?? '--'}</span>,
  homePhone: ({ contact }) => <span>{contact?.homePhone ?? '--'}</span>,
  mobilePhone: ({ contact }) => <span>{contact?.mobilePhone ?? '--'}</span>,
};

// ID is always set
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const keyGenerator: KeyGenerator<ResponseContact> = ({ contact: { id } }) => id!;

const ContactsListPages: FC = () => {
  const InputData = [
    {
      label: 'First name',
      type: 'text',
      info: 'Promotion Manager',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Last name',
      type: 'text',
      info: 'SAC Capital Advisor',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Company',
      type: 'text',
      info: 'Stanford',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Email',
      type: 'Email',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Personal email',
      type: 'Email',
      info: 'Human Resources',
      placeholder: 'Enter here',
      options: ['a', 'a'],
    },
    {
      label: 'Home Number',
      type: 'phonenumber',
      options: [''],
      info: '-',
      placeholder: 'Enter Here',
      bgClass: 'phonecontainermodal',
    },
    {
      label: 'Mobile phone',
      type: 'phonenumber',
      options: [''],
      info: '-',
      placeholder: 'Enter Here',
      bgClass: 'phonecontainermodal',
    },
  ];

  const [isGeneralSelected, setIsGeneralSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [setCount] = useState(0);
  const data = [
    {
      TabName: 'New Contacts (10)',
      description: 'New Contacts (10)',
      isbtn: true,
      btnText: 'Edit',
      setIsSelected: setIsGeneralSelected,
      isSelected: isGeneralSelected,
    },
    {
      TabName: 'Prospects (10)',
      description: 'Prospects (10)',
      isbtn: true,
      btnText: 'Add New',
      setIsSelected: setIsAddSelected,
      isSelected: isAddSelected,
    },
    {
      TabName: 'Engaged (10)',
      description: 'Engaged (10)',
    },
    {
      TabName: 'Terms Signed (10)',
      description: 'Terms Signed (10)',
    },
    ,
    {
      TabName: 'Job Leads (10)',
      description: 'Job Leads (10)',
    },
  ];

  const { query } = useRouter();
  const { client, authIsLoading } = useAPIContext();
  const [lastSeenID, setLastSeenID] = useState(0);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(Number(query.page ?? 1));
  const [isSelected, setIsSelected] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);

  const AddContactBottom = dynamic(
    () => import('../../components/forms/contacts/addcontactbottom')
  );

  useEffect(() => {
    setCurrentPage(Number(query.page ?? 1));
  }, [setCurrentPage, query]);

  const {
    data: response,
    // error,
    // isLoading,
  } = useQuery(getQueryKey(lastSeenID, limit), () => client.listContacts({ lastSeenID, limit }), {
    enabled: !authIsLoading,
  });

  useEffect(() => {
    if (currentPage === 1) {
      setLastSeenID(0);
      return;
    }
    if (response?.lastID) {
      setLastSeenID(response?.lastID);
    }
  }, [setLastSeenID, currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id={`page`} className="ps-2">
      {isSelected && <div className="overlay-gray"></div>}
      <div className="row pb-4">
        <div className="col-lg-7">
          {!showDeleted ? (
            <ContactsTabs data={data} setCount={setCount} />
          ) : (
            <div className="d-flex h-100 align-items-center justify-content-start ">
              <h3 className="globle-heading-h3 mb-0">Deleted Contacts</h3>
            </div>
          )}
        </div>
        <div className="col-lg-5">
          <div className="d-flex h-100 align-items-center justify-content-end pt-lg-0 pt-2">
            <div className="d-flex align-items-center justify-content-center pe-2 contact-deleted-check">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onChange={() => setshowDeleted(!showDeleted)}
                />
              </div>
              <span className="font-12 font-weight-600 font-dark-grey">Show deleted contacts</span>
            </div>
            <button className="filterbtn">
              <FilterIcon />
              &nbsp;
              <span>Filters</span>
            </button>
            {!showDeleted ? (
              <button className="globle-gradient-btn border-6" onClick={() => setIsSelected(true)}>
                Add Contact
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <ListPage
        listContainerClassName={`results`}
        columns={columns}
        items={response?.contacts}
        valueCalc={valueCalc}
        renderer={customRenderer}
        keyGenerator={keyGenerator}
      />
      <div id={`pagination`}>
        {response && (
          <PaginationBar
            currentPage={currentPage}
            pageCount={Math.ceil(response.count / limit)}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      {isSelected && (
        <AddContactBottom
          InputData={InputData}
          heading="Add Contact"
          setIsSelected={setIsSelected}
          isSelected={isSelected}
          addorsave="Add"
        />
      )}
    </div>
  );
};

export default ContactsListPages;
