import { Category as CategoryPayload } from '@/payload-types';

export interface Category extends Required<CategoryPayload> {}

export interface CreateCategoryInput
  extends Omit<CategoryPayload, 'id' | 'createdAt' | 'updatedAt'> {}

export interface UploadCategoryInput
  extends Omit<CategoryPayload, 'id' | 'createdAt' | 'updatedAt' | 'posts'> {}
