import { Article } from "@/types/article";
import ArticleItem from "./ArticleItem";

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <ul className="flex flex-col gap-y-5 sm:flex-row sm:gap-y-6 sm:gap-x-5">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
