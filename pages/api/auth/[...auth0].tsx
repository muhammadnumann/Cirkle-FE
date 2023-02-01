import { handleAuth, handleLogin, LoginOptions } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    const params: LoginOptions = {
      authorizationParams: {
        audience: 'https://cirkledev.ai',
        scope: 'openid profile email offline_access',
      },
    };
    try {
      await handleLogin(req, res, params);
    } catch (e) {
      console.log(e);
      res.status(e.status || 400).end(e.message);
    }
  },
});
