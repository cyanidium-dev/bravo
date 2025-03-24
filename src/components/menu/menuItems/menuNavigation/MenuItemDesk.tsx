import Link from "next/link";

interface MenuItemDeskProps {
  currentCategory: { title: string; url: string };
  category: { title: string; url: string };
}

export default function MenuItemDesk({
  currentCategory,
  category,
}: MenuItemDeskProps) {
  return (
    <li>
      <Link href={`/menu/${category?.url}`}>{category?.title}</Link>
    </li>
  );
}
