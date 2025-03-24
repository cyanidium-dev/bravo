"use client";
import { useMenuStore } from "@/store/menuStore";
import DishesList from "./menuItems/DishesList";
import MenuNavigationMob from "./menuItems/menuNavigation/MenuNavigationMob";
import MenuNavigationDesk from "./menuItems/menuNavigation/MenuNavigationDesk";

interface MenuProps {
  slug: string;
}

export default function Menu({ slug }: MenuProps) {
  const { categories } = useMenuStore((state) => state);

  console.log(categories);

  return (
    <section className="overflow-hidden">
      <MenuNavigationMob currentCategory={slug} />
      <div className="container xl:max-w-[1280px] flex flex-col xl:flex-row gap-y-10 xl:gap-x-5 pb-[120px] overflow-auto">
        <MenuNavigationDesk currentCategory={slug} />
        {/* <DishesList /> */}
      </div>
    </section>
  );
}
