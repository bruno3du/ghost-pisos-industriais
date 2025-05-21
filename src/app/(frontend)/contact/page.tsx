import { SendEmailContactInput } from '@/provider/email/email.dto';
import { Metadata } from 'next';
import { sendEmail } from './action/send-email';
import SubmitButton from './components/submit-button';

export const metadata: Metadata = {
  title: 'Contato | Ghost Pisos Industriais',
  description:
    'Entre em contato com nossos especialistas em piso industrial para uma consulta gratuita e orçamento.',
};

const data = [
  {
    title: 'Horário',
    description: 'Segunda - Sexta: 8h - 17h\nSábado: 9h - 14h\nDomingo: Fechado',
  },
  {
    title: 'Telefone',
    description: '(19) 98325-6973',
  },
  {
    title: 'Email',
    description: 'contato@ghostpisosindustriais.com',
  },
  {
    title: 'Endereço',
    description: 'Rua Industrial, 123\nDistrito Industrial\nCampinas, SP 13087-450',
  },
];

export default function ContactPage() {
  const handleSendContact = async (form: FormData) => {
    'use server';
    const mail = Object.fromEntries(form);
    await sendEmail(mail as unknown as SendEmailContactInput);
  };
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Entre em Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-gray-600 mb-8 text-pretty">
              Tem perguntas sobre nossas soluções de piso industrial? Entre em contato hoje para uma
              consulta gratuita e orçamento.
            </p>

            <div className="space-y-6">
              {data.map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p
                    className="text-gray-600 whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            <form action={handleSendContact} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome *
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sobrenome
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço de Email *
                </label>
                <input
                  name="email"
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
                  name="phone"
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
                  name="company"
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
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
