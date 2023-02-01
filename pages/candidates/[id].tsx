import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { APIError, hasError } from '../../internal/types/apiError';
import { useEffect, useState } from 'react';
import { useAPIContext } from '../../context/api';
import { useQuery } from 'react-query';
import dynamic from 'next/dynamic';

const Candidates = dynamic(() => import('../../components/candidates'));

const getQueryKey = (id: number): [string, number] => ['candidate', id];

const CandidateDetailsPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const [isLoading, setIsLoading] = useState(true);
  const { client, authIsLoading, authError } = useAPIContext();
  const [errors, setErrors] = useState<APIError>({});

  const {
    data: candidate,
    error: apiError,
    isLoading: apiIsLoading,
  } = useQuery(getQueryKey(id), ({ queryKey }) => client.getCandidate({ id: queryKey[1] }), {
    enabled: !authIsLoading,
  });

  useEffect(() => {
    if (authError) {
      setErrors((e) => ({ ...e, authError }));
    }

    if (!authIsLoading && !apiIsLoading) {
      setIsLoading(false);
    }
  }, [authError, apiError, authIsLoading, apiIsLoading, setErrors, setIsLoading]);

  if (hasError(errors)) {
    return (
      <div>
        <ul>
          {Object.keys(errors).map((k, i) => {
            return <li key={i}>{errors[k]['message']}</li>;
          })}
        </ul>
      </div>
    );
  }
  return (
    <>
      {isLoading || !candidate ? (
        <>
          <h2>CandidateDetail...</h2>
          <p>Is Loading....</p>
        </>
      ) : (
        <Candidates candidate={candidate} client={client} />
      )}
    </>
  );
};

export default withPageAuthRequired(CandidateDetailsPage);
