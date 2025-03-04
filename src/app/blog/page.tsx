import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Function to get all blog posts
async function getBlogPosts() {
  const contentDirectory = path.join(process.cwd(), "src/content/blog");
  const fileNames = fs.readdirSync(contentDirectory);
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    
    return {
      slug,
      ...data,
    };
  });
  
  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Nosso Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage || "/images/blog/default.jpg"}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}