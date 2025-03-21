"use client";
import { useState, useLayoutEffect, ReactNode } from "react";
import ArrowInCircleIcon from "../icons/ArrowinCircleIcon";
import { useSearchParams, useRouter } from "next/navigation";
import { useItemsPerPage } from "@/hooks/useItemsPerPage";

interface PaginationProps<T> {
  items: T[];
  renderItems: (items: T[]) => ReactNode;
  scrollTargetId: string;
  maxVisiblePages?: number;
}

export default function Pagination<T>({
  items,
  renderItems,
  scrollTargetId,
  maxVisiblePages = 4,
}: PaginationProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useLayoutEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });

    const targetElement = document.getElementById(scrollTargetId);
    if (targetElement) {
      const yOffset = -120; // Зміщення на 120px вгору
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: yPosition,
      });
    }
  };

  return (
    <>
      <div className="w-full max-w-[320px] sm:max-w-[660px] lg:max-w-[1000px] xl:max-w-full mb-10 xl:mb-[62px]">
        {renderItems(currentItems)}
      </div>
      <div className="inline-flex justify-center items-center gap-[33px]">
        <button
          className={`flex justify-center items-center p-[16.5px] size-[66px] rounded-[16px] 
          border-2 border-black transition duration-300 ease-in-out
          enabled:hover:bg-black/85 enabled:active:scale-95 enabled:focus-visible:bg-black/85
          ${page === 1 ? "bg-white text-black" : "bg-black text-white"}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={page === 1}
        >
          <ArrowInCircleIcon className="rotate-180" />
        </button>

        <div>
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`px-[8px] py-2 text-16med leading-[123%] transition duration-300 ease-in-out
            ${page === currentPage ? " text-green" : "  hover:text-green"}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className={`flex justify-center items-center p-[16.5px] size-[66px] rounded-[16px] transition duration-300 ease-in-out
           border-2 border-black enabled:hover:bg-black/85 enabled:active:scale-95 enabled:focus-visible:bg-black/85
          ${
            currentPage === totalPages
              ? "text-black bg-white"
              : "bg-black text-white"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={page === totalPages}
        >
          <ArrowInCircleIcon />
        </button>
      </div>
    </>
  );
}
