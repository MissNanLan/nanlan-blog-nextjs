import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleProps } from "@/types/article";
import { Calendar, ChartBarStacked, Tag } from "lucide-react";

export function ArticleCard(props: ArticleProps) {
  const { title, description, createdAt, tags, category, id } = props;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>
          <Link href={`/article/${id}`} className="hover:text-primary text-lg">
            {title}
          </Link>
        </CardTitle>
        <div className="text-gray-custom flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            <span className="pr-0.5">发表于</span>
            {createdAt}
          </span>
          <span className="text-gray-custom ">|</span>
          <span className="flex items-center gap-1">
            <ChartBarStacked size={14} />
            {category}
          </span>
          <span className="text-gray-custom">|</span>
          <span className="flex items-center gap-1">
            <Tag size={14} />
            {tags.join(", ")}
          </span>
        </div>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
