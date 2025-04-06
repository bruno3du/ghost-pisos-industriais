import { Hero } from "@/page/home/hero";
import { post } from "@/provider/post";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Piso Epóxi",
    description:
      "Pisos duráveis e resistentes a produtos químicos, perfeitos para ambientes industriais",
    icon: "/images/epoxy-icon.png",
    link: "/services#epoxy-flooring",
  },
  {
    title: "Concreto Polido",
    description:
      "Pisos sustentáveis, de baixa manutenção e com excelente durabilidade",
    icon: "/images/concrete-icon.png",
    link: "/services#polished-concrete",
  },
  {
    title: "Reparos de Piso",
    description: "Restaure seu piso industrial à sua condição original",
    icon: "/images/repair-icon.png",
    link: "/services#floor-repairs",
  },
];

// const posts = [
//   {
//     title: "Bem-vindo ao Nosso Blog de Pisos Industriais",
//     excerpt:
//       "Conheça as últimas tendências em pisos industriais e como nossos serviços podem ajudar seu negócio.",
//     date: "4 de Março, 2025",
//     image: "/images/blog/welcome.jpg",
//     slug: "welcome-post",
//   },
//   {
//     title:
//       "Piso Epóxi vs. Concreto Polido: Qual é o Certo para sua Instalação?",
//     excerpt:
//       "Uma comparação de duas opções populares de pisos industriais para ajudá-lo a fazer a melhor escolha para suas necessidades específicas.",
//     date: "5 de Março, 2025",
//     image: "/images/blog/comparison.jpg",
//     slug: "epoxy-vs-concrete",
//   },
// ];

export default function Home() {
  const posts = post.getPosts()
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      
      <Hero />
      {/* Services Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "A qualidade do trabalho superou nossas expectativas. O piso do nosso armazém nunca esteve melhor.",
                author: "João Silva",
                company: "ABC Manufatura",
              },
              {
                quote:
                  "Equipe profissional, excelente comunicação e resultados extraordinários. Altamente recomendado.",
                author: "Maria Rodriguez",
                company: "XYZ Logística",
              },
              {
                quote:
                  "Concluído dentro do prazo e do orçamento. O piso epóxi transformou nossa área de produção.",
                author: "David Santos",
                company: "Engenharia de Precisão Ltda",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Recent Blog Posts */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Últimas do Nosso Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Transformar seu Piso Industrial?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje para uma consulta gratuita e orçamento
            para seu projeto de piso industrial.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}
