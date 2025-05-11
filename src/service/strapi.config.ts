import { strapi } from '@strapi/client';

export const strapiClient = strapi({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
  auth: process.env.STRAPI_API_TOKEN,
});
