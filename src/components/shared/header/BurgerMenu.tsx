import { Dispatch, SetStateAction } from "react";
import NavMenuMob from "./NavMenuMob";
import CallbackInfo from "./CallbackInfo";
import Logo from "../logo/Logo";
import CartButton from "./CartButton";

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
          ? "translate-x-0 no-doc-scroll opacity-100"
          : "-translate-x-full opacity-0"
      } lg:hidden absolute z-50 top-0 right-0 w-[100vw] h-[100dvh] pb-8 bg-white text-black
      transition duration-[600ms] overflow-y-auto`}
    >
      <div className="container">
        <div className="sticky z-[60] top-0 left-[30px] flex items-center justify-between py-4 pr-[54px] sm:pr-[100px] mx-auto bg-white">
          <Logo
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            className="text-24bold leading-[120%] relative z-[60] text-black"
          />
          <CartButton variant="black" />
        </div>
        <CallbackInfo setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
        <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
      </div>
    </div>
  );
}
