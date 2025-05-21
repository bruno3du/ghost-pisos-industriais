// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { Categories } from '@/app/(payload)/collections/categories/categories';
import { Media } from './app/(payload)/collections/media';
import { Posts } from './app/(payload)/collections/posts/posts';
import { Users } from './app/(payload)/collections/users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Categories],
  editor: lexicalEditor({}),
 
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  email: nodemailerAdapter({
    defaultFromAddress: 'contato@ghostpisosindustriais.com',
    defaultFromName: 'Ghost Pisos Industriais',
    transportOptions: {
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: process.env.emailAddress,
        pass: process.env.emailPassword,
      },
    },
  }),
});
