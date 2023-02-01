import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';

const JobsListPages = dynamic(() => import('../../components/jobs/jobs'));

const JobsListPage = () => {
  return <JobsListPages />;
};

export default withPageAuthRequired(JobsListPage);
