import { AccessTokenError, getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export type AuthTokenResponse = {
  accessToken: string;
};

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<AuthTokenResponse>) => {
    try {
      const { accessToken } = await getAccessToken(req, res);
      if (!accessToken) {
        throw new AccessTokenError('access_token_expired', 'access_token_expired');
      }
      res.status(200).send({ accessToken });
    } catch (e) {
      console.log(e);
      res
        .writeHead(302, {
          Location: '/api/auth/logout',
        })
        .end();
    }
  }
);
