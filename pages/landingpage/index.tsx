import { useEffect, useState } from 'react';
import { useAPIContext } from 'context/api';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
const LandingPage = dynamic(() => import('components/landingPage/landingPage'));

const LandingPages = () => {
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
      <LandingPage />
    </>
  );
};

export default withPageAuthRequired(LandingPages);
