import { transformCategory } from '@/provider/automarticles/transform/category.transform';
import { transformPost } from '@/provider/automarticles/transform/post.transform';
import {
  AutoCategoryEvents,
  AutomCategory,
  AutomContent,
  AutomPost,
  AutoPostEvents,
} from '@/provider/automarticles/types/types';
import { CategoryProvider } from '@/provider/categories/categories';
import { PostProvider } from '@/provider/post';
import { UploadProvider } from '@/provider/upload';
import { HTTPError } from '@strapi/client';
import { writeFileSync } from 'fs';
import { BasePayload } from 'payload';

export class AutomArticles {
  posts: PostProvider;
  categories: CategoryProvider;
  upload: UploadProvider;

  constructor(payload: BasePayload) {
    this.posts = new PostProvider(payload);
    this.categories = new CategoryProvider(payload);
    this.upload = new UploadProvider(payload);
  }

  async execute(content: AutomContent) {
    if (content.event === AutoCategoryEvents.CATEGORY_CREATED) {
      return this.createCategory(content);
    }

    if (content.event === AutoCategoryEvents.CATEGORY_UPDATED) {
      return this.updateCategory(content);
    }

    if (content.event === AutoCategoryEvents.CATEGORY_DELETED) {
      return this.deleteCategory(content);
    }

    if (
      content.event === AutoPostEvents.POST_CREATED ||
      content.event === AutoPostEvents.POST_UPDATED
    ) {
      return this.createPost(content);
    }

    // if (content.event === AutoPostEvents.POST_UPDATED) {
    //   return this.updatePost(content);
    // }

    if (content.event === AutoPostEvents.POST_DELETED) {
      return this.deletePost(content);
    }

    if (content.event === 'CHECK_INTEGRATION') {
      return 'OK';
    }

    throw new Error('Event not supported');
  }

  // Busca ou cria categoria pelo externalId
  async getOrCreateCategoryByExternalId(externalId: string, name: string) {
    const found = await this.categories.getByExternalId(externalId);
    if (found) {
      return found;
    }
    // Cria se não existir
    const created = await this.categories.create({
      externalId,
      name,
    });
    return created;
  }

  async createPost(post: AutomPost) {
    try {
      writeFileSync('./post.json', JSON.stringify(post, null, 2));
      const cover = await this.upload.uploadImageByUrl({
        url: post.post.featured_image.url,
        alt: post.post.featured_image.alt_text,
      });
      const response = await this.posts.create({
        ...(await transformPost(post)),
        cover: cover.id,
      });
      writeFileSync('./post-response.json', JSON.stringify(response, null, 2));

      if (!response) {
        throw new Error('Error creating post');
      }
      return {
        success: true,
        message: 'Post created successfully',
      };
    } catch (error) {
      if (error instanceof HTTPError) {
        return {
          success: false,
          message: await error.response.json(),
        };
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }



  async updatePost(content: AutomPost) {
    const response = await this.posts.update(content.post.id, await transformPost(content));
    return response;
  }

  async deletePost({ post }: AutomPost) {
    const response = await this.posts.delete(post.id);
    return response;
  }

  async createCategory(category: AutomCategory) {
    try {
      const findCategory = await this.categories.getByExternalId(category.category.id);

      if (findCategory) {
        return findCategory;
      }

      const response = await this.categories.create(transformCategory(category));
      return response;
    } catch (error) {
      console.error('Error creating category', error);
      return null;
    }
  }

  async updateCategory(category: AutomCategory) {
    const response = await this.categories.update(
      category.category.id,
      transformCategory(category)
    );
    return response;
  }

  async deleteCategory({ category }: AutomCategory) {
    const response = await this.categories.delete(category.id);
    return response;
  }
}
