import { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contato',
  fields: [
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    { name: 'address', type: 'richText' },
    { name: 'hours', type: 'richText' },
    { name: 'social', type: 'array', fields: [
      { name: 'name', type: 'text' },
      { name: 'url', type: 'text' },
    ] },
  ],
  access: {
    read: () => true,
  },
}