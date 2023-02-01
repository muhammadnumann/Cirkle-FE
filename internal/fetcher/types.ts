import { DeepRequired } from 'internal/types/types';
import { components, operations } from '../../schema/crmAPISchema';

type Schemas = components['schemas'];

// requests
export type v1ListContactsRequest = operations['APIService_ListContacts']['parameters']['query'];
export type v1UpdateCandidateRequest = {
  id: number;
  body: operations['APIService_UpdateCandidate']['requestBody']['content']['application/json'];
};

// request bodies

// responses
export type v1ListContactsResponse = Schemas['v1ListContactsResponse'];
export type v1ListCandidatesResponse = Schemas['v1ListCandidatesResponse'];
export type v1ListClientsResponse = Schemas['v1ListClientsResponse'];
export type v1CreateCandidateResponse = Schemas['v1CreateCandidateResponse'];
export type v1GetCandidateResponse = Schemas['v1GetCandidateResponse'];
export type v1UpdateCandidateResponse = Schemas['v1UpdateCandidateResponse'];
export type ListJobOrdersResponse = Schemas['ListJobOrdersResponse'];

// types
export type v1Skill = Schemas['v1Skill'];
export type v1Tag = Schemas['v1Tag'];
export type v1Address = Schemas['v1Address'];
export type v1AddressFull = Schemas['v1AddressFull'];
