import { getBlogArticles } from "@/utils/getBlogArticles";
import { GET_BLOG_ARTICLES_QUERY } from "@/lib/datoCmsQueries";

export default async function Articles() {
  const res = await getBlogArticles(GET_BLOG_ARTICLES_QUERY);
  const articles = res?.data?.allArticles;
  console.log(articles);

  return <section>Articles</section>;
}
