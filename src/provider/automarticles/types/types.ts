export enum AutoPostEvents {
  POST_CREATED = 'POST_CREATED',
  POST_UPDATED = 'POST_UPDATED',
  POST_DELETED = 'POST_DELETED',
}

export enum AutoCategoryEvents {
  CATEGORY_CREATED = 'CATEGORY_CREATED',
  CATEGORY_UPDATED = 'CATEGORY_UPDATED',
  CATEGORY_DELETED = 'CATEGORY_DELETED',
}

export interface AutoCheck {
  event: 'CHECK_INTEGRATION';
}

export interface AutomPost {
  event: AutoPostEvents;
  post: {
    id: string;
    slug: string;
    status: 'draft' | 'published';
    title: string;
    content: {
      text: string;
      html: string;
      rich: string;
    };
    description: string;
    featured_image: {
      url: string;
      filename: string;
      alt_text: string;
    };
    category: {
      id: string;
      name: string;
    };
    publication_date: number;
  };
}

export interface AutomCategory {
  event: AutoCategoryEvents;
  category: {
    id: string;
    name: string;
  };
}

export type AutomContent = AutomPost | AutomCategory | AutoCheck;
