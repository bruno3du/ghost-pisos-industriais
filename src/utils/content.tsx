'use client';

import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

export const Content = ({ data }: { data: SerializedEditorState }) => {
  const html = convertLexicalToHTML({ data });

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="prose md:prose-md lg:prose-lg" />
  );
};
