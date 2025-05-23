import { AutomPost } from '@/provider/automarticles/types/types';
import { Post } from '@/provider/posts/types';
import { htmlToLexical } from '@/utils/html-to-lexical';

export const transformPost = async (content: AutomPost): Promise<Post> => {
  const richContent = await htmlToLexical(content.post.content.html);


  return {
    title: content.post.title,
    description: content.post.description.substring(0, 70),
    slug: content.post.slug,
    externalId: content.post.id,
    content: richContent,
    cover: content.event
  };
};
