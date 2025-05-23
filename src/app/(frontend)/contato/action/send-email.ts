'use server';

import { Email } from '@/provider/email';
import { SendEmailContactInput } from '@/provider/email/email.dto';

export const sendEmail = async (input: SendEmailContactInput) => {
  try {
    await new Email().sendEmailContact(input);
    return {
      message: 'success',
      error: undefined,
    };
  } catch (error) {
    return {
      message: undefined,
      error: error,
    };
  }
};
