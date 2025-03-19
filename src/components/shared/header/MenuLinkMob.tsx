import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface MenuLinkProps {
  menuItem: {
    title: string;
    link: string;
  };
  className?: string;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function MenuLinkMob({
  menuItem,
  className = "",
  setIsHeaderMenuOpened,
}: MenuLinkProps) {
  const { title, link } = menuItem;

  return (
    <li
      className={`relative pt-6 pb-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-black ${className}`}
    >
      <Link
        href={link}
        onClick={() => setIsHeaderMenuOpened(false)}
        className="leading-[120%] transition duration-300 ease-out active:text-green focus-visible:text-green
         laptop:hover:text-green outline-none"
      >
        {title}
      </Link>
    </li>
  );
}
