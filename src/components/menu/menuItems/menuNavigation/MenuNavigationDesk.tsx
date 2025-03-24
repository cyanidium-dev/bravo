"use client";
import { useMenuStore } from "@/store/menuStore";
import MenuItemDesk from "./MenuItemDesk";

interface MenuNavigationDeskProps {
  currentCategory: string;
}

export default function MenuNavigationDesk({
  currentCategory,
}: MenuNavigationDeskProps) {
  const { categories } = useMenuStore((state) => state);

  if (!categories?.length) {
    return null;
  }

  const sortedCategories = [
    { title: "Всі страви", url: "all-dishes", order: 0 },
    ...categories,
  ].sort((a, b) => a.order - b.order);

  return (
    <nav className="hidden xl:block">
      <ul className="flex flex-col gap-y-3">
        {sortedCategories.map((category, idx) => (
          <MenuItemDesk
            key={idx}
            currentCategory={currentCategory}
            category={category}
          />
        ))}
      </ul>
    </nav>
  );
}
