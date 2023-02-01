import { useEffect, useState } from 'react';
import { useAPIContext } from 'context/api';
import dynamic from 'next/dynamic';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { authError: error, authIsLoading } = useAPIContext();
  const Dashboard = dynamic(() => import('components/dashboard3/dashboard'));

  useEffect(() => {
    setIsLoading(authIsLoading);
  }, [authIsLoading, setIsLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Dashboard />
    </>
  );
};

export default withPageAuthRequired(HomePage);
