/* eslint-disable @typescript-eslint/no-unused-vars */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import dynamic from 'next/dynamic';

const ContactsListPages = dynamic(() => import('../../components/contacts/index'));

const ContactsListPage: FC = () => {
  return <ContactsListPages />;
};

export default withPageAuthRequired(ContactsListPage);
