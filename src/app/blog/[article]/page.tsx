import Content from "@/components/article/content/Content";
import Hero from "@/components/article/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import { GET_ARTICLE_BY_SLUG } from "@/lib/datoCmsQueries";
import { getDataFromCmsByField } from "@/utils/getDataFromCmsByField";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;

  const res = await getDataFromCmsByField(GET_ARTICLE_BY_SLUG, article);
  const currentArticle = res?.data?.allArticles[0];

  console.log(currentArticle);

  if (!currentArticle) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero article={currentArticle} />
        <Content article={currentArticle} />
      </main>
      <Footer />
    </>
  );
}
