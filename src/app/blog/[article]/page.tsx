import Article from "@/components/article/Article";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import { Suspense } from "react";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;

  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Article article={article} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
