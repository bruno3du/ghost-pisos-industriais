import config from '@/payload.config';
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical';

import { JSDOM } from 'jsdom';

export const htmlToLexical = async (html: string) => {
  const value =  convertHTMLToLexical({
    editorConfig: await editorConfigFactory.default({
      config: await config,
    }),
    html,
    JSDOM,
  });

  return value;
};
