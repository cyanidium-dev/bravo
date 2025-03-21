import { Article } from "@/types/article";
import ContentList from "./ContentList";
import Image from "next/image";

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  const { mainContent, images } = article;
  console.log(images[1].url);
  return (
    <section className="container xl:max-w-[1280px] pt-[66px] xl:pt-[90px] pb-[120px]">
      <ContentList content={mainContent} />
      <div className="flex flex-col sm:flex-row gap-5 mt-[50px] sm:mt-[90px]">
        <div className="relative sm:w-[42.5%] aspect-[300/320] sm:aspect-[485/320] rounded-[18px] overflow-hidden">
          <Image
            src={images[0].url}
            alt={images[0].alt}
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative sm:w-[55.7%] aspect-[300/320] sm:aspect-[485/320] rounded-[18px] overflow-hidden">
          <Image
            src={images[1].url}
            alt={images[1].alt}
            fill
            sizes="(max-width: 640px) 100vw, 55vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
