import { Post as PostPayload } from '@/payload-types';
import { DefaultNodeTypes, TypedEditorState } from '@payloadcms/richtext-lexical';

export type Post = Omit<PostPayload, 'createdAt' | 'updatedAt' | 'id' | 'content'> & {
  content: TypedEditorState<DefaultNodeTypes>;
};

export type CreatePostInput = Post;

export type UpdatePostInput = Post;
