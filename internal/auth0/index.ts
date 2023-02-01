import { ManagementClient, Organization } from 'auth0';

type CachedAuth0Client = {
  client: ManagementClient;
};

let cached: CachedAuth0Client = global.auth0;

if (!cached) {
  const scope = 'read:organizations';
  // strip https:// prefix
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const domain = process.env.AUTH0_ISSUER_BASE_URL.substring(8);
  const managementClient = new ManagementClient({
    domain,
    clientId: process.env.AUTH0_MGMT_CLIENT_ID,
    clientSecret: process.env.AUTH0_MGMT_CLIENT_SECRET,
    scope,
  });
  cached = global.auth0 = { client: managementClient };
}

const getOrgByOrgName = async (orgName: string): Promise<Organization> => {
  const { client } = cached;
  return await client.organizations.getByName({ name: orgName });
};

export default getOrgByOrgName;
