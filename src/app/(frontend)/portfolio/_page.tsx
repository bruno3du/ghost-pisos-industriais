import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfólio | Ghost Pisos Industriais',
  description:
    'Veja nosso portfólio de projetos de pisos industriais concluídos, incluindo pisos epóxi, concreto polido e reparos de piso.',
};
const projects = [
  {
    id: 'manufacturing-facility-epoxy',
    title: 'Piso Epóxi para Instalação Industrial',
    category: 'Piso Epóxi',
    description:
      'Instalação de um sistema de piso epóxi resistente a produtos químicos para uma instalação de fabricação de 4.645 m².',
    location: 'Campinas, SP',
    year: 2024,
    image: '/images/portfolio/manufacturing-epoxy.jpg',
  },
  {
    id: 'warehouse-polished-concrete',
    title: 'Concreto Polido para Centro de Distribuição',
    category: 'Concreto Polido',
    description:
      'Piso de concreto polido para um centro de distribuição de 9.290 m² com tráfego intenso de empilhadeiras.',
    location: 'São Paulo, SP',
    year: 2023,
    image: '/images/portfolio/warehouse-concrete.jpg',
  },
  {
    id: 'food-production-facility',
    title: 'Instalação de Produção de Alimentos',
    category: 'Piso Epóxi',
    description:
      'Sistema de piso epóxi compatível com normas sanitárias para uma instalação de produção de alimentos com propriedades antimicrobianas.',
    location: 'Curitiba, PR',
    year: 2023,
    image: '/images/portfolio/food-production.jpg',
  },
  {
    id: 'automotive-plant-floor-repair',
    title: 'Reparo de Piso de Fábrica Automotiva',
    category: 'Reparos de Piso',
    description:
      'Reparo extensivo de concreto e preenchimento de juntas para uma fábrica de manufatura automotiva.',
    location: 'Betim, MG',
    year: 2022,
    image: '/images/portfolio/automotive-repair.jpg',
  },
  {
    id: 'pharmaceutical-facility',
    title: 'Piso para Instalação Farmacêutica',
    category: 'Piso Epóxi',
    description:
      'Instalação de um sistema de piso epóxi para sala limpa para uma instalação de fabricação farmacêutica.',
    location: 'Rio de Janeiro, RJ',
    year: 2022,
    image: '/images/portfolio/pharmaceutical.jpg',
  },
  {
    id: 'logistics-hub-floor-markings',
    title: 'Marcações de Piso para Centro Logístico',
    category: 'Marcações de Piso',
    description:
      'Sistema abrangente de marcação de piso para um centro logístico de 6.968 m² para melhorar a segurança e a eficiência.',
    location: 'Joinville, SC',
    year: 2021,
    image: '/images/portfolio/logistics-markings.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Nosso Portfólio</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Veja nossos projetos de piso industrial concluídos para conhecer exemplos do nosso
          trabalho em várias indústrias e aplicações.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Pronto para transformar seu piso industrial?</h2>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Entre em Contato para um Orçamento Gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
