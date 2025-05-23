import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ghost Pisos Industriais',
    short_name: 'Ghost Pisos',
    description:
      'Especialistas em soluções de piso industrial incluindo piso epóxi, concreto polido e reparos de piso',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f2937',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: 'https://ghostpisosindustriais.com',
      },
    ],
    categories: ['business', 'construction', 'industrial'],
    screenshots: [
      {
        src: '/screenshots/home.jpg',
        sizes: '1280x720',
        type: 'image/jpg',
        label: 'Página inicial da Ghost Pisos Industriais',
      },
      {
        src: '/screenshots/portfolio.jpg',
        sizes: '1280x720',
        type: 'image/jpg',
        label: 'Portfólio de projetos',
      },
    ],
    shortcuts: [
      {
        name: 'Contato',
        url: '/contato',
        description: 'Entre em contato conosco',
      },
      {
        name: 'Serviços',
        url: '/servicos',
        description: 'Nossos serviços de pisos industriais',
      },
    ],
  };
}
