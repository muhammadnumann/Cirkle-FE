import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import dynamic from 'next/dynamic';

const CommunicationDetail = dynamic(() => import('components/communication'));

const Comunication = () => {
  return <CommunicationDetail />;
};

export default withPageAuthRequired(Comunication);
