import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Soluções em Piso Industrial",
  description: "Entre em contato com nossos especialistas em piso industrial para uma consulta gratuita e orçamento.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Entre em Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-gray-600 mb-8">
              Tem perguntas sobre nossas soluções de piso industrial? Entre em contato hoje para uma consulta gratuita e orçamento.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Rua Industrial, 123<br />
                  Distrito Industrial<br />
                  Campinas, SP 13087-450
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Telefone</h3>
                <p className="text-gray-600">(19) 98325-6973</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">contato@pisoindustrial.com.br</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Horário</h3>
                <p className="text-gray-600">
                  Segunda - Sexta: 8h - 17h<br />
                  Sábado: 9h - 14h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço de Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}