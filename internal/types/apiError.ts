export type APIError = {
  authError?: Error;
  apiError?: Error;
};

export const hasError = (e: APIError): boolean => {
  return e.authError !== undefined || e.apiError !== undefined;
};
