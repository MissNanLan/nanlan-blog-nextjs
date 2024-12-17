import { ArchiveGroup, ArchiveItem } from "@/types/archive";
import { articles } from "./articles";

// 将文章数据转换为归档项
const archiveItems: ArchiveItem[] = articles.map((article) => {
  const date = new Date(article.createdAt);
  return {
    id: article.id,
    title: article.title,
    createdAt: article.createdAt,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  };
});

// 按年月分组
export const archives: ArchiveGroup[] = archiveItems
  .reduce((groups, item) => {
    // 查找相同年月组
    const existingGroup = groups.find(
      (group) => group.year === item.year && group.month == item.month,
    );

    // 查找相同年月的组
    if (existingGroup) {
      existingGroup.articles.push(item);
      existingGroup.count = existingGroup.articles.length;
    } else {
      groups.push({
        year: item.year,
        month: item.month,
        articles: [item],
        count: 1,
      });
    }

    return groups;
  }, [] as ArchiveGroup[])
  .sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });
