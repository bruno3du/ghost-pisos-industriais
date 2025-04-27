import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Cover {
  id?: number;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover?: Cover;
  content?: BlocksContent;
}
