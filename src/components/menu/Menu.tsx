import { getDataFromCms } from "@/utils/getDataFromCms";
import Hero from "./hero/Hero";
import MenuItems from "./menuItems/MenuItems";
import { GET_MENU_BANNER } from "@/lib/datoCmsQueries";

export default async function Menu() {
  const res = await getDataFromCms(GET_MENU_BANNER);

  const banner = res?.data?.banner;

  return (
    <>
      <Hero banner={banner} />
      <MenuItems />
    </>
  );
}
