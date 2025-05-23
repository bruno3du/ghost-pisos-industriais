import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nossos Serviços | Ghost Pisos Industriais',
  description:
    'Serviços abrangentes de piso industrial incluindo concreto polido, reparos de piso, revestimentos e marcações.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'epoxy-flooring',
      title: 'Piso Epóxi',
      description:
        'Nossos sistemas de piso epóxi proporcionam durabilidade excepcional, resistência química e recursos de segurança para ambientes industriais. De revestimentos epóxi básicos a sistemas decorativos de alto desempenho, oferecemos soluções personalizadas para as necessidades específicas da sua instalação.',
      features: [
        'Resistente a produtos químicos e manchas',
        'Superfície sem emendas e fácil de limpar',
        'Cores e acabamentos personalizados',
        'Opções antiderrapantes disponíveis',
        'Suporta tráfego pesado e equipamentos',
      ],
      image: '/images/services/epoxy-flooring.jpg',
    },
    {
      id: 'polished-concrete',
      title: 'Concreto Polido',
      description:
        'Os pisos de concreto polido combinam beleza com funcionalidade, oferecendo uma solução de piso sustentável e de baixa manutenção com excelente durabilidade. Nosso processo mecânico de lixamento e polimento transforma o concreto comum em uma superfície lisa e reflexiva.',
      features: [
        'Ecologicamente amigável',
        'Custos reduzidos de manutenção',
        'Maior reflexividade de luz',
        'Resistência aprimorada a escorregões',
        'Durabilidade a longo prazo',
      ],
      image: '/images/services/polished-concrete.webp',
    },
    {
      id: 'floor-repairs',
      title: 'Reparos de Piso',
      description:
        'Nossos serviços de reparo de piso abordam rachaduras, descascamentos, juntas e outros danos para restaurar seu piso industrial à condição ideal. De pequenos reparos a grandes reabilitações, usamos técnicas e materiais líderes do setor.',
      features: [
        'Reparo de rachaduras e juntas',
        'Preparação de superfície',
        'Recuperação de concreto',
        'Eliminação de riscos de tropeços',
        'Tempo rápido de execução',
      ],
      image: '/images/services/floor-repairs.webp',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Nossos Serviços</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Fornecemos soluções abrangentes de piso para instalações industriais, oferecendo expertise
          em instalação, manutenção e reparo.
        </p>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col  ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12`}
            >
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h3 className="font-bold mb-3">Características:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contato?service=${service.id}`}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition inline-block"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
