import { operations, components, paths } from '../../schema/crmAPISchema';
import { Fetcher, OpReturnType } from 'openapi-typescript-fetch';
import {
  ApiResponse,
  CreateFetch,
  FetchConfig,
  Middleware,
  OpenapiPaths,
  _TypedFetch,
} from 'openapi-typescript-fetch/dist/cjs/types';
import {
  ListJobOrdersResponse,
  v1CreateCandidateResponse,
  v1GetCandidateResponse,
  v1ListCandidatesResponse,
  v1ListClientsResponse,
  v1ListContactsRequest,
  v1ListContactsResponse,
  v1UpdateCandidateRequest,
  v1UpdateCandidateResponse,
} from './types';
import { Err, Ok, Result } from 'ts-results';

export type OneOf<T> = { response: T } | { errMsg: string };

type Schemas = components['schemas'];

type openapiFetcher<Paths extends OpenapiPaths<Paths>> = {
  configure: (config: FetchConfig) => void;
  use: (mw: Middleware) => number;
  path: <P extends keyof Paths>(
    path: P
  ) => {
    method: <M extends keyof Paths[P]>(
      method: M
    ) => {
      create: CreateFetch<M, Paths[P][M]>;
    };
  };
};

export interface CrmApiClientWorker {
  createCandidate: ({
    candidate,
  }: operations['APIService_CreateCandidate']['requestBody']['content']['application/json']) => Promise<
    Result<v1CreateCandidateResponse, Error>
  >;
  getCandidate: (
    pathParams: operations['APIService_GetCandidate']['parameters']['path']
  ) => Promise<v1GetCandidateResponse>;
  listCandidates: (
    queryParams: operations['APIService_ListCandidates']['parameters']['query']
  ) => Promise<v1ListCandidatesResponse>;
  updateCandidate: ({ id, body }: v1UpdateCandidateRequest) => Promise<v1UpdateCandidateResponse>;
  listClients: (
    queryParams: operations['APIService_ListClients']['parameters']['query']
  ) => Promise<v1ListClientsResponse>;
  listContacts: ({ lastSeenID, limit }: v1ListContactsRequest) => Promise<v1ListContactsResponse>;
  listJobOrders: (
    queryParams: operations['FrontendService_ListJobOrders']['parameters']['query']
  ) => Promise<ListJobOrdersResponse>;
}

export class CRMAPIClient implements CrmApiClientWorker {
  private fetcher: openapiFetcher<paths>;
  private accessToken: string;

  constructor(fetcher: openapiFetcher<paths>) {
    this.fetcher = fetcher;
  }

  async updateAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    this.fetcher.configure({
      baseUrl: 'http://localhost:8080',
      use: [getAuthMiddleware(this.accessToken)],
    });
  }

  async createCandidate({
    candidate,
  }: operations['APIService_CreateCandidate']['requestBody']['content']['application/json']): Promise<
    Result<v1CreateCandidateResponse, Error>
  > {
    const createCandidate = this.fetcher.path('/api/v1/candidates').method('post').create();

    try {
      const { data: createdCandidate } = await createCandidate({ candidate });

      return Ok(createdCandidate);
    } catch (e) {
      if (e instanceof createCandidate.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }

      return Err(e);
    }
  }

  async getCandidate(
    pathParams: operations['APIService_GetCandidate']['parameters']['path']
  ): Promise<v1GetCandidateResponse> {
    const getCandidate = this.fetcher.path('/api/v1/candidates/{id}').method('get').create();

    try {
      const { data: candidate } = await getCandidate(pathParams);

      return candidate;
    } catch (e) {
      if (e instanceof getCandidate.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }

      throw e;
    }
  }

  async listCandidates(
    queryParams: operations['APIService_ListCandidates']['parameters']['query']
  ): Promise<v1ListCandidatesResponse> {
    const listCandidates = this.fetcher.path('/api/v1/candidates').method('get').create();
    try {
      const { data } = await listCandidates(queryParams);

      return data;
    } catch (e) {
      console.log(e);
      if (e instanceof listCandidates.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }

      throw e;
    }
  }

  async listClients(
    queryParams: operations['APIService_ListClients']['parameters']['query']
  ): Promise<v1ListClientsResponse> {
    const listClients = this.fetcher.path('/api/v1/clients').method('get').create();
    try {
      const { data } = await listClients(queryParams);
      return data;
    } catch (e) {
      console.log(e);
      if (e instanceof listClients.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }
      throw e;
    }
  }

  async updateCandidate({
    id,
    body,
  }: v1UpdateCandidateRequest): Promise<v1UpdateCandidateResponse> {
    const updateCandidate = this.fetcher.path('/api/v1/candidates/{id}').method('put').create();

    try {
      const { data } = await updateCandidate({ id, ...body });

      return data;
    } catch (e) {
      console.log(e);
      if (e instanceof updateCandidate.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }
      throw e;
    }
  }

  async listContacts(queryParams: v1ListContactsRequest): Promise<v1ListContactsResponse> {
    const listContacts = this.fetcher.path('/api/v1/contacts').method('get').create();

    try {
      const { data } = await listContacts(queryParams);

      return data;
    } catch (e) {
      console.log(e);
      if (e instanceof listContacts.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }
      throw e;
    }
  }

  async listJobOrders(
    queryParams: operations['FrontendService_ListJobOrders']['parameters']['query']
  ): Promise<ListJobOrdersResponse> {
    const listJobOrders = this.fetcher.path('/api/frontend/jobOrder').method('get').create();

    try {
      const { data } = await listJobOrders(queryParams);

      return data;
    } catch (e) {
      console.log(e);
      if (e instanceof listJobOrders.Error) {
        const error = e.getActualType();
        console.log(error.data.message);
      }
      throw e;
    }
  }
}

const getAuthMiddleware = (accessToken?: string): Middleware => {
  return async (url, init, next): Promise<ApiResponse> => {
    init.headers.set('Authorization', `Bearer ${accessToken}`);

    return next(url, init);
  };
};

const createAPIClient = (accessToken?: string): CRMAPIClient => {
  const fetcher: openapiFetcher<paths> = Fetcher.for<paths>();

  fetcher.configure({
    baseUrl: 'http://localhost:8080',
    use: [getAuthMiddleware(accessToken)],
  });

  return new CRMAPIClient(fetcher);
};

const crmAPIClient = createAPIClient();

const getCRMApiClient = (): CRMAPIClient => crmAPIClient;

export default getCRMApiClient;
