import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Post {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover?: string;
  content?: BlocksContent;
}
