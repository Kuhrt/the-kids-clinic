import {
  HTTPAuthorizationError,
  HTTPError,
  HTTPForbiddenError,
  strapi
} from '@strapi/client';

import RepositoryError from '@/errors/RepositoryError';

export const getDataClient = () => {
  if (!process.env.NEXT_PUBLIC_CMS_API_URL) {
    throw new Error('CMS API URL is not defined');
  }

  if (!process.env.NEXT_PUBLIC_CMS_API_KEY) {
    throw new Error('CMS API Key is not defined');
  }

  return strapi({
    baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
    auth: process.env.NEXT_PUBLIC_CMS_API_KEY
  });
};

type RepositoryErrorOptions = {
  shouldThrow?: boolean;
};

export const handleRepositoryError = (
  error: unknown,
  options?: RepositoryErrorOptions
) => {
  const defaultOptions: RepositoryErrorOptions = {
    shouldThrow: true
  };
  const { shouldThrow } = { ...defaultOptions, ...options };

  let message = 'An unknown error occurred in the repository';
  let code = 500;

  if (
    error instanceof HTTPForbiddenError ||
    error instanceof HTTPAuthorizationError
  ) {
    message = 'Access to the requested resource is forbidden';
    code = 403;
  } else if (error instanceof HTTPError) {
    message = error.message || message;
    code = error.response.status ?? code;
  }

  if (shouldThrow) {
    throw new RepositoryError(message, code);
  } else {
    console.error(message, error);
  }
};
