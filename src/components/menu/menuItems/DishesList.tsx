"use client";
import { useMenuStore } from "@/store/menuStore";
import NoDishes from "./NoDishes";
import DishCard from "./DishCard";

interface DishesListProps {
  currentCategory: string;
}

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
    return <NoDishes>В даній категорій ще немає страв</NoDishes>;
  }
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-6 xl:gap-y-5 mt-10 xl:mt-0">
      {dishesList.map((dish, idx) => (
        <DishCard key={idx} dish={dish} />
      ))}
    </ul>
  );
}
