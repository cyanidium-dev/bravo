import { Article } from "@/types/article";
import ContentList from "./ContentList";

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  const { mainContent, images } = article;
  return (
    <section className="container xl:max-w-[1280px] pt-[66px] xl:pt-[90px] pb-[120px]">
      <ContentList content={mainContent} />
    </section>
  );
}
