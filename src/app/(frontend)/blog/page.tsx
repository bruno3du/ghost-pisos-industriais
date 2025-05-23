import { Media } from '@/payload-types';
import { PayloadServer } from '@/provider/payload';
import { PostProvider } from '@/provider/posts';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await new PostProvider(await new PayloadServer().execute()).getAll();

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Nosso Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.docs.map((post, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                {!!(post.cover as Media)?.url && (
                  <Image
                    src={((post.cover as Media).url as string) || '/images/blog/default.jpg'}
                    alt={(post.cover as Media)?.alt || ''}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.updatedAt).toLocaleString('pt-BR', {
                    dateStyle: 'short',
                  })}
                </p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


