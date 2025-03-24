"use client";
import { useMenuStore } from "@/store/menuStore";
import NoDishes from "./NoDishes";

interface DishesListProps {
  currentCategory: string;
}

export default function DishesList({ currentCategory }: DishesListProps) {
  // const { categories } = useMenuStore((state) => state);
  const categories = [];
  if (!categories?.length) {
    return <NoDishes />;
  }
  return <ul></ul>;
}
