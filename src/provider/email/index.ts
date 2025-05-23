import { SendEmailContactInput } from './email.dto';
import { contactTemplate } from './templates/contact';
import { transporter } from './transporter';

export class Email {
  sendEmailContact = async ({
    company,
    email,
    firstName,
    lastName,
    message,
    phone,
  }: SendEmailContactInput) => {
    return await transporter.sendMail({
      from: '"Ghost Pisos Industriais" <contato@ghostpisosindustriais.com>',
      to: 'contato@ghostpisosindustriais.com',
      subject: 'Contato website',
      html: contactTemplate({
        company,
        email,
        firstName,
        lastName,
        message,
        phone,
      }),
    });
  };
}
