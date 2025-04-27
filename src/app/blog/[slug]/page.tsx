import { PageProps } from '@/app/@types';
import { post as postApi } from '@/provider/post';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Content } from '../../../utils/content';

// Função para gerar metadados dinâmicos para SEO
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const post = await postApi.getPost((await params).slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: post.title,
    description: post.description || `${post.title} - Blog`,
    openGraph: post.cover
      ? {
          images: [
            {
              url: process.env.NEXT_PUBLIC_STRAPI_URL + post.cover.formats.small.url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }
      : undefined,
  };
}

// Função para gerar todos os slugs de posts para geração estática
export async function generateStaticParams() {
  const posts = await postApi.getPosts();

  try {
    return posts.map(post => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await postApi.getPost(slug);

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

          {article.cover && (
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <Image
                src={process.env.NEXT_PUBLIC_STRAPI_URL + article.cover.formats.large.url}
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
          <Content content={article.content ?? []} />
        </div>
      </article>
    </main>
  );
}
