export interface ArchiveItem {
  id: string;
  title: string;
  createdAt: string;
  year: number;
  month: number;
}

export interface ArchiveGroup {
  year: number;
  month: number;
  articles: ArchiveItem[];
  count: number;
}
