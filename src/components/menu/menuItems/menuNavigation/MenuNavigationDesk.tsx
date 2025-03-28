"use client";
import { useMenuStore } from "@/store/menuStore";
import MenuItemDesk from "./MenuItemDesk";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { motion } from "framer-motion";
import { fadeInAnimation, listVariants } from "@/helpers/animation";

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
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={fadeInAnimation({ x: -50 })}
        className="flex flex-col gap-y-3"
      >
        {sortedCategories.map((category, idx) => (
          <MenuItemDesk
            key={idx}
            currentCategory={currentCategory}
            category={category}
          />
        ))}
      </AnimatedWrapper>
    </nav>
  );
}
