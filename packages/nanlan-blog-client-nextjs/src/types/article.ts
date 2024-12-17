export interface ArticleProps {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  tags: string[];
  category: string;
  images?: string;
}
