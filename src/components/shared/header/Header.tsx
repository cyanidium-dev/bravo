"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import SecondaryButton from "../buttons/SecondaryButton";
import Logo from "../logo/Logo";
import CartButton from "./CartButton";
import { menuList } from "@/helpers/menuList";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuButton from "./BurgerMenuButton";
import { PHONE } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";

interface HeaderProps {
  variant?: "white" | "black";
}

export default function Header({ variant = "white" }: HeaderProps) {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="2xl"
      classNames={{ base: "justify-center" }}
      className={`fixed z-10 justify-center py-6 lg:py-8 backdrop-blur-lg supports-[backdrop-blur]:before:backdrop-blur-lg will-change-transform ${
        variant === "white" ? "text-white bg-black bg-opacity-30" : "text-black"
      }`}
    >
      <div className="flex items-center container xl:max-w-[1280px]">
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
            <CartButton variant={variant} />
            <a
              href={`tel:+${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
            >
              <SecondaryButton className="hidden lg:flex gap-x-[14px] items-center w-[221px]">
                <Image
                  src="/images/icons/phone.svg"
                  alt="phone icon"
                  width={20}
                  height={20}
                />
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
        />
      </div>
    </Navbar>
  );
}
