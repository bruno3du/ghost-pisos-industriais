import { Media } from "@/payload-types";
import { PayloadServer } from "@/provider/payload";
import { PostProvider } from "@/provider/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await new PostProvider(await new PayloadServer().execute()).getAll();

  return posts.docs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_FRONT_URL ?? 'https://localhost:3000'}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    images: [(post.cover as Media)?.url].filter(Boolean) as string[],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}