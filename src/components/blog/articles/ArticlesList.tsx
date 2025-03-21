"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Article } from "@/types/article";
import ArticleItem from "./ArticleItem";
import Pagination from "@/components/shared/pagination/Pagination";
import { useItemsPerPage } from "@/hooks/useItemsPerPage";

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const currentItems = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const targetElement = document.getElementById("articles-list");
    if (targetElement) {
      const yOffset = -120; // Зміщення на 120px вгору
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      id="articles-list"
      className="flex flex-col justify-center items-center"
    >
      <ul
        className="w-full max-w-[320px] sm:max-w-[660px] lg:max-w-[1000px] xl:max-w-full mb-10 xl:mb-[62px] flex flex-col gap-y-5 
      sm:flex-row sm:flex-wrap sm:gap-y-5 sm:gap-x-4 xl:gap-x-5 xl:gap-y-6"
      >
        {currentItems.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
