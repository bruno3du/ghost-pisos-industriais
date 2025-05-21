import { AutomCategory } from '@/provider/automarticles/types/types';

export const transformCategory = (category: AutomCategory) => {
  return {
    externalId: category.category.id,
    name: category.category.name,
  };
};
