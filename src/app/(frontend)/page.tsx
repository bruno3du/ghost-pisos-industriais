import { Hero } from '@/components/page/home/hero';
import { Media } from '@/payload-types';
import { PayloadServer } from '@/provider/payload';
import { PostProvider } from '@/provider/posts';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Piso Epóxi',
    description:
      'Pisos duráveis e resistentes a produtos químicos, perfeitos para ambientes industriais',
    icon: '/images/epoxy-icon.png',
    link: '/servicos#epoxy-flooring',
  },
  {
    title: 'Concreto Polido',
    description: 'Pisos sustentáveis, de baixa manutenção e com excelente durabilidade',
    icon: '/images/concrete-icon.png',
    link: '/servicos#polished-concrete',
  },
  {
    title: 'Reparos de Piso',
    description: 'Restaure seu piso industrial à sua condição original',
    icon: '/images/repair-icon.png',
    link: '/servicos#floor-repairs',
  },
];

export const revalidate = 60;

export default async function Home() {
  const posts = await new PostProvider(await new PayloadServer().execute()).getAll();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={service.icon} alt={service.title} width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-600 font-medium hover:underline">
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Últimas do Nosso Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-48 w-full">
                  {(post.cover as Media).url && (
                    <Image
                      src={(post.cover as Media).url as string}
                      alt={(post.cover as Media).alt}
                      title={post.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.createdAt).toLocaleDateString('pt-BR')}
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
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Ver Todos os Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar seu Piso Industrial?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje para uma consulta gratuita e orçamento para seu projeto de
            piso industrial.
          </p>
          <Link
            href="/contato"
            className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}
