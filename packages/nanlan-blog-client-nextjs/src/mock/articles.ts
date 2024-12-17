import { ArticleProps } from "@/types/article";

export const articles: ArticleProps[] = [
  {
    id: "1",
    title: "使用 Next.js 13 构建现代博客",
    description:
      "探索 Next.js 13 的新特性，包括 App Router、Server Components 等",
    content: "这是文章的详细内容...",
    createdAt: "2024-03-15",
    tags: ["Next.js", "React", "TypeScript"],
    category: "前端开发",
    images: "/images/thumbnail.png",
  },
  {
    id: "2",
    title: "TypeScript 高级类型系统详解",
    description: "深入理解 TypeScript 的类型系统，掌握高级类型的使用方法",
    content: "这是文章的详细内容...",
    createdAt: "2024-03-14",
    tags: ["TypeScript", "JavaScript"],
    category: "编程语言",
  },
  {
    id: "3",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-02-13",
    tags: ["CSS", "Web开发"],
    category: "前端开发",
  },
  {
    id: "4",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-04-12",
    tags: ["CSS", "Web开发"],
    category: "前端开发",
  },
  {
    id: "5",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2023-04-12",
    tags: ["CSS", "Web开发"],
    category: "前端开发",
  },
  {
    id: "6",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-05-12",
    tags: ["CSS", "Web开发"],
    category: "前端开发",
  },
];

export const tags = Array.from(
  new Set(articles.flatMap((article) => article.tags)),
);

export const categories = Array.from(
  new Set(articles.map((article) => article.category)),
);
