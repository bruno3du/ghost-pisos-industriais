# Industrial Flooring Website

A modern, responsive website for an industrial flooring company, built with Next.js and TailwindCSS.

## Features

- **Landing Page**: Showcases services, testimonials, and recent blog posts
- **Services Page**: Detailed information about each service offered
- **Portfolio**: Gallery of completed projects
- **Blog**: Markdown-based blog with posts about industrial flooring
- **Contact Form**: Easy way for potential clients to get in touch

## Tech Stack

- **Framework**: Next.js 15.2+
- **Language**: TypeScript
- **Styling**: TailwindCSS 4+
- **Content**: Markdown with gray-matter and MDX
- **Deployment**: Ready for deployment on Vercel

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Add images to the `/public/images` directory (see `/public/images/README.md` for required images)

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Content Management

Blog posts are stored as Markdown files in the `/src/content/blog` directory. Each post requires:
- Title
- Date
- Excerpt
- Cover image (path starts with `/images/blog/`)

For example:

```markdown
---
title: "Post Title"
date: "2025-03-04"
excerpt: "Short description of the post."
coverImage: "/images/blog/image.jpg"
---

Content goes here in Markdown format.
```

## Customization

- Update colors in TailwindCSS config
- Add/modify pages in `/src/app` directory
- Customize components in `/src/components`

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
