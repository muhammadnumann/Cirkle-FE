import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getAccessToken(req, res);
    const { accessToken } = token;

    const response = await fetch('http://localhost:8080/api/v1/candidates', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const candidates = await response.json();
    res.status(200).send(candidates);
  } catch (e) {}
});
