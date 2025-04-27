import { strapiClient } from '@/service/strapi.config';
import { CollectionTypeManager } from '@strapi/client';
import { Response } from '../types/response';
import { Post as PostType } from './types';

export class Post {
  articles: CollectionTypeManager;

  constructor() {
    this.articles = strapiClient.collection('articles');
  }

  async getPosts() {
    try {
      const response = (await this.articles.find()) as unknown as Response<PostType[]>;
      console.log('🚀 ~ Post ~ getPosts ~ response:', response.data[0].cover);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getPost(slug: string) {
    try {
      const response = (await this.articles.find({
        filters: {
          slug: {
            $eq: slug,
          },
        },
      })) as unknown as Response<PostType[]>;

      return response.data[0];
    } catch {
      return null;
    }
  }
}

export const post = new Post();
