import fs from "fs";
import matter from "gray-matter";
import { readFile } from "node:fs/promises";
import path from "node:path";

interface IPost {
    date: Date;
    slug: string;
    coverImage: string;
    title: string;
    excerpt: string;
}

type BlogPost = {
    frontmatter: {
        title: string;
        date: string;
        coverImage?: string;
        description?: string;
    };
    content: string;
};

export class Post {
    getPosts() {
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
            } as IPost;
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

    async getPost(slug: string) {
        const contentDirectory = path.join(process.cwd(), "src/content/blog");
        const fullPath = path.join(contentDirectory, `${slug}.md`);

        try {
            const fileContents = await readFile(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                frontmatter: data as BlogPost["frontmatter"],
                content,
            };
        } catch {
            return null;
        }
    }
}

export const post = new Post()