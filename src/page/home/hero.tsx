import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="w-full py-30 bg-gradient-to-r from-gray-800 to-gray-900/20 text-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Soluções Premium em Pisos Industriais
            </h1>
            <p className="text-xl mb-8">
              Sistemas de pisos duráveis, seguros e personalizados para instalações industriais
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Solicite um Orçamento Grátis
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
          <div className="absolute w-full h-full left-0 top-0 -z-10">
            <Image
              src="/images/hero-floor.jpg"
              alt="Piso Industrial"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
