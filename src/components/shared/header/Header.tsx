"use client";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import SecondaryButton from "../buttons/SecondaryButton";
import Logo from "../logo/Logo";
import CartButton from "./CartButton";
import { menuList } from "@/helpers/menuList";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuButton from "./BurgerMenuButton";
import { PHONE } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import PhoneIcon from "../icons/PhoneIcon";
import CartModal from "../modals/cartModal/CartModal";
import Backdrop from "../backdrop/Backdrop";

interface HeaderProps {
  variant?: "white" | "black";
}

export default function Header({ variant = "white" }: HeaderProps) {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isBlurred={false}
        maxWidth="2xl"
        classNames={{ wrapper: "px-0" }}
        className={`fixed top-0 left-0 z-10 justify-center w-dvw will-change-transform transition duration-500 ease-out ${
          variant === "white"
            ? `text-white ${
                isScrolled
                  ? "bg-black bg-opacity-30 backdrop-blur-lg"
                  : "bg-transparent bg-opacity-0 backdrop-blur-none"
              }`
            : "text-black backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center container xl:max-w-[1280px] py-4 lg:py-6 ">
          <NavbarBrand className="mr-10 xl:mr-20">
            <Logo className="text-24bold leading-[120%]" />
          </NavbarBrand>
          <NavbarContent className="hidden lg:flex gap-x-6 xl:gap-x-[44px]">
            {menuList.map(({ title, link }, idx) => (
              <NavbarItem
                key={idx}
                className="xl:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
              >
                <Link href={link}>{title}</Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent className="ml-auto mr-4 sm:mr-[60px] lg:mr-0">
            <div className="flex items-center gap-x-6 ">
              <CartButton
                variant={variant}
                onClick={() => setIsCartModalOpened(true)}
              />
              <a
                href={`tel:+${PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="hidden lg:block"
              >
                <SecondaryButton className="hidden lg:flex gap-x-[14px] items-center w-[221px]">
                  <PhoneIcon className="size-5" />
                  {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
                </SecondaryButton>
              </a>
            </div>
          </NavbarContent>
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />

          <BurgerMenu
            isHeaderMenuOpened={isHeaderMenuOpened}
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            setIsCartModalOpened={setIsCartModalOpened}
          />
        </div>
      </Navbar>
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isCartModalOpened}
        onClick={() => setIsCartModalOpened(false)}
      />
    </>
  );
}
