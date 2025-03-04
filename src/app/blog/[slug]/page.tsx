import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PageProps } from "@/app/@types";

type BlogPost = {
  frontmatter: {
    title: string;
    date: string;
    coverImage?: string;
    description?: string;
  };
  content: string;
};

type MdxComponents = React.ComponentProps<typeof MDXProvider>["components"];

export const mdxComponents: MdxComponents = {
  // ...
  Image,
  h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold mb-4" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold mb-3" {...props} />,
  h4: (props) => <h4 className="text-xl font-bold mb-2" {...props} />,
  h5: (props) => <h5 className="text-lg font-bold mb-2" {...props} />,
  h6: (props) => <h6 className="text-base font-bold mb-2" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 mb-4" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 text-sm p-1 rounded-md" {...props} />
  ),
  inlineCode: (props) => (
    <code className="bg-gray-100 text-sm p-1 rounded-md" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 p-4 rounded-md mb-4" {...props} />
  ),
  table: (props) => (
    <table
      className="w-full border-collapse border border-gray-300 mb-4"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="border border-gray-300 bg-gray-100 font-bold p-2"
      {...props}
    />
  ),
  td: (props) => <td className="border border-gray-300 p-2" {...props} />,
  a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
  hr: (props) => <hr className="border-gray-300 my-6" {...props} />,
};

// Função para obter um post do blog pelo slug
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const contentDirectory = path.join(process.cwd(), "src/content/blog");
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  try {
    const fileContents = await readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    console.log("🚀 ~ getBlogPost ~ content:", content);
    console.log("🚀 ~ getBlogPost ~ data:", data);

    return {
      frontmatter: data as BlogPost["frontmatter"],
      content,
    };
  } catch (error) {
    return null;
  }
}

// Função para gerar metadados dinâmicos para SEO
export async function generateMetadata({
  params,
}: PageProps<{ slug: string }>): Promise<Metadata> {
  const post = await getBlogPost((await params).slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: post.frontmatter.title,
    description:
      post.frontmatter.description || `${post.frontmatter.title} - Blog`,
    openGraph: post.frontmatter.coverImage
      ? {
          images: [
            {
              url: post.frontmatter.coverImage,
              width: 1200,
              height: 630,
              alt: post.frontmatter.title,
            },
          ],
        }
      : undefined,
  };
}

// Função para gerar todos os slugs de posts para geração estática
export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "src/content/blog");

  try {
    const fileNames = await readdir(contentDirectory);

    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => ({
        slug: fileName.replace(/\.md$/, ""),
      }));
  } catch (error) {
    console.error("Erro ao ler diretório de blog:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<{ slug: string }>) {
  const post = await getBlogPost((await params).slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <p className="text-gray-500 mb-2">
            {new Date(post.frontmatter.date).toLocaleString("pt-BR", {
              dateStyle: "short",
            })}
          </p>
          <h1 className="text-4xl font-bold mb-6">{post.frontmatter.title}</h1>

          {post.frontmatter.coverImage && (
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
