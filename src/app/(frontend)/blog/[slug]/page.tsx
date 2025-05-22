import { PageProps } from '@/app/(frontend)/@types';
import { Media } from '@/payload-types';
import { PayloadServer } from '@/provider/payload';
import { PostProvider } from '@/provider/post';
import { Content } from '@/utils/content';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';


export const revalidate = 60
 

export const dynamicParams = true 
 

export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const post = await new PostProvider(await new PayloadServer().execute()).getBySlug(
    (await params).slug
  );

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: post.title,
    description: post.description || `${post.title} - Blog`,
    openGraph: (post.cover as Media)?.url
      ? {
          images: [
            {
              url: (post.cover as Media).url as string,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }
      : undefined,
  };
}

export async function generateStaticParams() {
  const posts = await new PostProvider(await new PayloadServer().execute()).getAll();

  try {
    return posts.docs.map(post => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await new PostProvider(await new PayloadServer().execute()).getBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <p className="text-gray-500 mb-2">
            {new Date(article.createdAt).toLocaleString('pt-BR', {
              dateStyle: 'short',
            })}
          </p>
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

          {(article.cover as Media)?.url && (
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <Image
                src={(article.cover as Media).url as string}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <Content data={article.content} />
        </div>
      </article>
    </main>
  );
}
