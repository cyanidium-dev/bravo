"use client";

import { useEffect } from "react";
import { useMenuStore } from "./menuStore";
import { Category } from "@/types/category";

type Props = {
  categories: Category[];
  children: React.ReactNode;
};

export default function HydrateStore({ categories, children }: Props) {
  const setMenuItems = useMenuStore((state) => state.setCategories);

  useEffect(() => {
    setMenuItems(categories);
  }, [categories, setMenuItems]);

  return <>{children}</>;
}
