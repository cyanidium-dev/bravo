import ArrowInCircleIcon from "../icons/ArrowinCircleIcon";

export default function Pagination({
  currentPage,
  totalPages,
  maxVisiblePages = 4,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
}) {
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

  return (
    <div className="inline-flex justify-center items-center gap-[35px]">
      <button
        className={`flex justify-center items-center p-[16.5px] size-[66px] rounded-[16px] 
          border-2 border-black transition duration-300 ease-in-out
          enabled:hover:bg-black/85 enabled:active:scale-95 enabled:focus-visible:bg-black/85
          ${currentPage === 1 ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowInCircleIcon className="rotate-180" />
      </button>

      <div>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`px-[9px] py-2 text-16med leading-[123%] transition duration-300 ease-in-out
            ${page === currentPage ? " text-green" : "  hover:text-green"}`}
            onClick={() => onPageChange(page)}
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
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowInCircleIcon />
      </button>
    </div>
  );
}
