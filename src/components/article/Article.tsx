import Content from "@/components/article/content/Content";
import Hero from "@/components/article/hero/Hero";
import { GET_ARTICLE_BY_SLUG } from "@/lib/datoCmsQueries";
import { getDataFromCmsByField } from "@/utils/getDataFromCmsByField";
import NoArticle from "./NoArticle";

interface ArticleProps {
  article: string;
}

export default async function Article({ article }: ArticleProps) {
  const res = await getDataFromCmsByField(GET_ARTICLE_BY_SLUG, article);
  const currentArticle = res?.data?.allArticles[0];

  return (
    <>
      {!currentArticle ? (
        <NoArticle />
      ) : (
        <>
          <Hero article={currentArticle} />
          <Content article={currentArticle} />
        </>
      )}
    </>
  );
}
