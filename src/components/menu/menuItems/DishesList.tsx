"use client";
import { useMenuStore } from "@/store/menuStore";
import NoDishes from "./NoDishes";
import DishCard from "./DishCard";
import Pagination from "@/components/shared/pagination/Pagination";
import { useDishesPerPage } from "@/hooks/useDishesPerPage";

interface DishesListProps {
  currentCategory: string;
}

const SECTION_ID = "dishes-list";

export default function DishesList({ currentCategory }: DishesListProps) {
  const { categories } = useMenuStore((state) => state);

  if (!categories?.length) {
    return null;
  }

  const dishesList =
    currentCategory === "all-dishes"
      ? categories.flatMap((category) => category.dishes)
      : categories.find((category) => category?.url === currentCategory)
          ?.dishes;

  if (!dishesList) {
    return <NoDishes>На жаль, такої сторінки не існує</NoDishes>;
  }
  if (!dishesList?.length) {
    return <NoDishes>В даній категорії ще немає страв</NoDishes>;
  }
  return (
    <div
      id={SECTION_ID}
      className="flex flex-col justify-center items-center w-full"
    >
      <Pagination
        items={dishesList}
        scrollTargetId={SECTION_ID}
        useItemsPerPage={useDishesPerPage}
        className="mb-[26px] xl:mb-[70px]"
        renderItems={(currentItems) => (
          <ul className="flex flex-wrap gap-x-5 gap-y-6 xl:gap-y-5 mt-10 xl:mt-0">
            {currentItems.map((dish, idx) => (
              <DishCard key={idx} dish={dish} />
            ))}
          </ul>
        )}
      />
    </div>
  );
}
