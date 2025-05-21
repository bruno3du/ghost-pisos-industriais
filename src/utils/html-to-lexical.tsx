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

  value.root.children.forEach((child) => {
    console.log(child.type);
  });

  const dom = new JSDOM(html)

  console.log(dom.serialize(), "serialize");
  console.log(dom.window.document.body.childNodes, "dom");
  

  return value;
};
