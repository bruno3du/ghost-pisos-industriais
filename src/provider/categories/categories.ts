import { CreateCategoryInput, UploadCategoryInput } from '@/provider/categories/types/types';
import { BasePayload } from 'payload';

export class CategoryProvider {
  private payload: BasePayload;

  constructor(payload: BasePayload) {
    this.payload = payload;
  }

  async getAll() {
    const response = await this.payload.find({
      collection: 'categories',
    });

    if (!response) {
      throw new Error('No categories found');
    }

    return response;
  }

  async getById(id: string) {
    const response = await this.payload.find({
      collection: 'categories',
      where: {
        id: { equals: id },
      },
    });

    if (!response || !response.docs) {
      throw new Error('Category not found');
    }

    return response.docs[0];
  }

  async delete(id: string) {
    return this.payload.delete({
      collection: 'categories',
      id,
    });
  }

  async create(category: CreateCategoryInput) {
    const response = await this.payload.create({
      collection: 'categories',
      data: category,
    });

    return response;
  }

  async getByExternalId(externalId: string) {
    const response = await this.payload.find({
      collection: 'categories',
      where: {
        externalId: { equals: externalId },
      },
    });

    if (!response || !response.docs) {
      throw new Error('Category not found');
    }

    return response.docs[0];
  }

  async update(id: string, category: UploadCategoryInput) {
    const response = await this.payload.update({
      collection: 'categories',
      id,
      data: category,
    });

    return response;
  }
}
