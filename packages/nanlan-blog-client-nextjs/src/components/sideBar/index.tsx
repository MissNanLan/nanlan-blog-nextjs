import { articles } from "@/mock/articles";
import { categories } from "@/mock/categories";
import { tags } from "@/mock/tags";
import { LatestArticle } from "./LatestArticle";
import { LatestComment } from "./LatestComment";
import { comments } from "@/mock/comments";
import { LatestCategory } from "./LatestCategory";
import { TagCloud } from "./TagCloud";
import { archives } from "@/mock/archives";
import { LatestArchive } from "./Archive";

export function Sidebar() {
  return (
    <div className="space-y-4">
      <LatestArticle articles={articles} />
      <LatestComment comments={comments} />
      <LatestCategory categories={categories} />
      <TagCloud tags={tags} />
      <LatestArchive archives={archives} />
    </div>
  );
}
