import { post } from '@/provider/post';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await post.getPosts();
  const imageUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? '';

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Nosso Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={
                    post.cover
                      ? imageUrl + post.cover?.formats.large.url
                      : '/images/blog/default.jpg'
                  }
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleString('pt-BR', {
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
