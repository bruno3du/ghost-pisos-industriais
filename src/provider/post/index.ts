import { CreatePostInput, UpdatePostInput } from '@/provider/post/types';
import { BasePayload } from 'payload';

export class PostProvider {
  private payload: BasePayload;

  constructor(payload: BasePayload) {
    this.payload = payload;
  }

  async create(post: CreatePostInput) {
    const response = await this.payload.create({
      collection: 'posts',
      data: {
        ...post,
        content: post.content as unknown as {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: 'ltr' | 'rtl' | null;
            format: '' | 'start' | 'left' | 'center' | 'right' | 'end' | 'justify';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        },
      },
    });

    return response;
  }

  async update(id: string, post: UpdatePostInput) {
    const response = await this.payload.update({
      collection: 'posts',
      id,
      data: {
        ...post,
        content: post.content as unknown as {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: 'ltr' | 'rtl' | null;
            format: '' | 'start' | 'left' | 'center' | 'right' | 'end' | 'justify';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        },
      },
    });

    return response;
  }

  async delete(id: string) {
    return this.payload.delete({
      collection: 'posts',
      id,
    });
  }

  async getAll() {
    const response = await this.payload.find({
      collection: 'posts',
      req: {
        cache: 'no-store',
      },
    });

    if (!response) {
      throw new Error('No posts found');
    }

    return response;
  }

  async getBySlug(slug: string) {
    try {
      const response = await this.payload.find({
        collection: 'posts',
        where: {
          slug: {
            equals: slug,
          },
        },
        req: {
          cache: 'no-store',
        },
      });

      return response.docs[0];
    } catch {
      return null;
    }
  }
}
