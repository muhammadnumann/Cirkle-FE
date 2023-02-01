import { useAPIContext } from '../context/api';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Dashboard = dynamic(() => import('../components/dashboard2/dashboard'));

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { authError: error, authIsLoading } = useAPIContext();

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

export default HomePage;

export const getServerSideProps = withPageAuthRequired();
