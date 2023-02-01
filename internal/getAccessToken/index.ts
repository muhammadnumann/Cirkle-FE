import { AuthTokenResponse } from '../../pages/api/auth/accessToken';

const getAccessToken = async (): Promise<AuthTokenResponse | void> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/accessToken`;
  const resp = await fetch(url, { redirect: 'manual' });

  if (isRedirect(resp)) {
    window.location.assign(resp.url);
    return;
  }
  const authResp = (await resp.json()) as AuthTokenResponse;
  return authResp;
};

const isRedirect = (resp: Readonly<Response>) => resp.type === 'opaqueredirect';

export default getAccessToken;
