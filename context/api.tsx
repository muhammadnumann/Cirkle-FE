import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';
import { Dispatch } from 'react';
import { createContext, useContext } from 'react';
import { getAccessToken, getCRMApiClient } from '../internal';
import { CRMAPIClient } from '../internal/fetcher';

export type APIContextContent = {
  client: CRMAPIClient;
  accessToken: string | null;
  setAccessToken: Dispatch<string>;
  authIsLoading: boolean;
  user?: UserProfile;
  authError?: Error;
};

const APIContext = createContext<APIContextContent>({
  client: getCRMApiClient(),
  accessToken: null,
  setAccessToken: () => {},
  authIsLoading: true,
});

export const APIWrapper = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const f = async () => {
      if (!isLoading && user && !error && !accessToken) {
        const authResp = await getAccessToken();
        if (authResp) {
          setAccessToken(authResp.accessToken);
        }
      }
    };

    f();
  }, [user, error, accessToken, setAccessToken, isLoading]);
  const apiContextLoading = isLoading || (user != null && accessToken == null);

  const context = useContext(APIContext);
  context.setAccessToken = setAccessToken;
  context.accessToken = accessToken;
  context.authIsLoading = error == null ? apiContextLoading : false;
  context.user = user ? { ...user } : context.user;
  context.authError = error;

  if (context.accessToken) {
    context.client.updateAccessToken(context.accessToken);
  }

  return <APIContext.Provider value={{ ...context }}>{children}</APIContext.Provider>;
};

export const useAPIContext = (): APIContextContent => useContext(APIContext);
