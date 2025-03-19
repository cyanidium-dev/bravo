"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import SecondaryButton from "../buttons/SecondaryButton";
import Logo from "../logo/Logo";
import CartButton from "./CartButton";
import { menuList } from "@/helpers/menuList";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuButton from "./BurgerMenuButton";

interface HeaderProps {
  variant?: "white" | "black";
}

export default function Header({ variant = "white" }: HeaderProps) {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header
      className={`fixed z-10 w-dvw ${
        variant === "white" ? "text-white" : "text-black"
      }`}
    >
      <Navbar shouldHideOnScroll>
        <div className="flex container py-6">
          <NavbarBrand className="mr-10 xl:mr-20">
            <Logo className="text-24bold leading-[120%] relative z-[60]" />
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
          <div className="flex items-center gap-x-6 ml-auto mr-4 lg:mr-0">
            <CartButton variant={variant} />
            <SecondaryButton className="hidden lg:block w-[221px]">
              Замовити дзвінок
            </SecondaryButton>
          </div>
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
        <BurgerMenu
          isHeaderMenuOpened={isHeaderMenuOpened}
          setIsHeaderMenuOpened={setIsHeaderMenuOpened}
        />
      </Navbar>
    </header>
  );
}
