import { Article } from "@/types/article";
import ArticleItem from "./ArticleItem";

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <div className=" flex justify-center items-center">
      <ul className="max-w-[320px] sm:max-w-[660px] lg:max-w-[1000px] xl:max-w-full flex flex-col gap-y-5 sm:flex-row sm:flex-wrap sm:gap-y-5 sm:gap-x-4 xl:gap-x-5 xl:gap-y-6">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
