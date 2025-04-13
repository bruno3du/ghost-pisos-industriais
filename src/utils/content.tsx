'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

export const Content = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <p className="text-neutral900 max-w-prose">{children}</p>,
        list: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
        'list-item': ({ children }) => <li className="text-neutral900 max-w-prose">{children}</li>,
        code: ({ children }) => <code className="text-neutral900 max-w-prose">{children}</code>,
        quote: ({ children }) => (
          <blockquote className="text-neutral900 max-w-prose">{children}</blockquote>
        ),
        // ...or point to a design system
        heading: ({ children, level }) => {
          console.log('🚀 ~ Content ~ level:', level);

          switch (level) {
            case 1:
              return <h1 className="text-4xl font-bold mb-6 mt-3">{children}</h1>;
            case 2:
              return <h2 className="text-3xl font-bold mb-4 mt-3">{children}</h2>;
            case 3:
              return <h3 className="text-2xl font-bold mb-3 mt-2">{children}</h3>;
            case 4:
              return <h4 className="text-xl font-bold mb-2 mt-2">{children}</h4>;
            case 5:
              return <h5 className="text-lg font-bold mb-2 mt-2">{children}</h5>;
            case 6:
              return <h6 className="text-base font-bold mb-2 mt-1">{children}</h6>;
            default:
              return <h1 className="text-4xl font-bold mb-6 mt-3">{children}</h1>;
          }
        },
        link: ({ children, url }) => (
          <Link className="text-blue-500 hover:underline" href={url}>
            {children}
          </Link>
        ),
        image: ({ image }) => <img src={image.url} alt={image.alternativeText ?? ''} />,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
        code: ({ children }) => <code className="text-neutral900 max-w-prose">{children}</code>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        strikethrough: ({ children }) => <span className="line-through">{children}</span>,
      }}
    />
  );
};
