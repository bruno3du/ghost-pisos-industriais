import { strapiClient } from '@/service/strapi.config';
import { Response } from '../types/response';
import { Post as PostType } from './types';

export class Post {
  async getPosts() {
    try {
      const response = (await strapiClient.collection('articles').find()) as unknown as Response<
        PostType[]
      >;

      console.log(response.data[0].cover);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getPost(slug: string) {
    try {
      const response = (await strapiClient.collection('articles').find({
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
