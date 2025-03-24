import MenuItemDesk from "./MenuItemDesk";

interface MenuNavigationDeskProps {
  currentCategory: { title: string; url: string };
  categories: { title: string; url: string; order: number }[];
}

export default function MenuNavigationDesk({
  currentCategory,
  categories,
}: MenuNavigationDeskProps) {
  return (
    <nav>
      {" "}
      <ul className="hidden xl:block">
        {categories.map((category, idx) => (
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
