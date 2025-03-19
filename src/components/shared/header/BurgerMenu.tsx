import { Dispatch, SetStateAction } from "react";
import NavMenuMob from "./NavMenuMob";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  return (
    <div
      className={`${
        isHeaderMenuOpened
          ? "translate-x-0 opacity-100 no-doc-scroll"
          : "translate-x-full opacity-0"
      } container absolute z-50 top-0 right-0 w-screen h-dvh pt-[128px] pb-[60px] bg-white
      transition duration-[1000ms] overflow-y-auto`}
    >
      <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
    </div>
  );
}
