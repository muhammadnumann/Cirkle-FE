import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useAPIContext } from '../../context/api';
import { APIError, hasError } from '../../internal/types/apiError';

const getQueryKey = () => 'clients';

const ClientsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { client, authIsLoading, authError } = useAPIContext();
  const [errors, setErrors] = useState<APIError>({});

  const {
    data: clientsResp,
    error: apiError,
    isLoading: apiIsLoading,
  } = useQuery(getQueryKey(), () => client.listClients({}), {
    enabled: !authIsLoading,
  });
  const clients = clientsResp?.clients;

  useEffect(() => {
    if (authError) {
      setErrors((e) => ({ ...e, authError }));
    }
    if (apiError) {
      setErrors((e) => ({ ...e, apiError: apiError as Error }));
    }
    if (!authIsLoading && !apiIsLoading) {
      setIsLoading(false);
    }
  }, [authIsLoading, setIsLoading, apiIsLoading, authError, apiError, setErrors]);
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
  if (isLoading || !clients) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Clients Page</h1>
      <h2>Longer Paths...</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.entityName}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Short Paths...</h2>
      <h4>Feed JS expression/obj and set props in Link/Next</h4>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.entityName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withPageAuthRequired(ClientsPage);
