"use client";
import MenuNavigationMob from "./menuItems/menuNavigation/MenuNavigationMob";
import MenuNavigationDesk from "./menuItems/menuNavigation/MenuNavigationDesk";
import DishesList from "./menuItems/DishesList";

interface MenuProps {
  slug: string;
}

export default function Menu({ slug }: MenuProps) {
  return (
    <section className="overflow-hidden">
      <MenuNavigationMob currentCategory={slug} />
      <div className="container xl:max-w-[1280px] flex flex-col xl:flex-row gap-y-10 xl:gap-x-5 pb-[120px] overflow-auto">
        <MenuNavigationDesk currentCategory={slug} />
        <DishesList />
      </div>
    </section>
  );
}
