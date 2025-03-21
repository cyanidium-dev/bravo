import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { title, description, mainImage, slug } = article;
  return (
    <li className="relative aspect-[300/454] xl:aspect-[366/454] rounded-[16px] text-white overflow-hidden">
      <Link href={`/blog/${slug}`}>
        <Image
          src={mainImage?.url}
          alt={mainImage.alt}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-article"></div>
        <div className="relative px-6 xl:px-7 pt-6 xl:pt-8 pb-5">
          <h2 className="mb-3 text-24semi leading-[123%] line-clamp-2">
            {title}
          </h2>
          <p className="line-clamp-4">{description}</p>
        </div>
      </Link>
    </li>
  );
}
