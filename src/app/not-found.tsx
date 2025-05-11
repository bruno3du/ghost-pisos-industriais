import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] h-full bg-gray-100 ">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700  mb-2">Página não encontrada</h2>
      <p className="text-gray-600  mb-6">
        Desculpe, a página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
