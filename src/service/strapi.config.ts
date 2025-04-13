import { strapi } from '@strapi/client';

export const strapiClient = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'f289c6c1a5f23e81fba63cfc3ddc76a28c14ac2c0b8afe378655df04985f97cc5c0021122b049f5b9d16b2a22018fffcec22e9baa11bbb73366f8c41f9222f6075df251ab7fa28c43ea64b7c285f7af0b827b3e55fbb054073f1e5da2f67206ad9fca63239e29e30f8733a53e281c1645500c6bba3105768c50dff11df006b05',
});
