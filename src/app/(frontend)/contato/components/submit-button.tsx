'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
    >
      {status.pending ? 'Enviando...' : 'Enviar Mensagem'}
    </button>
  );
}
