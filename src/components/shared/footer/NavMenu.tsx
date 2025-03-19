import MenuLink from "./MenuLink";
import { menuList } from "@/helpers/menuList";

export default function NavMenu() {
  return (
    <nav className={`relative flex items-center`}>
      <ul className={`flex flex-col gap-y-[18px] w-full`}>
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
