import Link from "next/link";

interface MenuLinkProps {
  menuItem: {
    title: string;
    link: string;
  };

  className?: string;
}

export default function MenuLink({
  menuItem,

  className = "",
}: MenuLinkProps) {
  const { title, link } = menuItem;

  return (
    <li className={`text-white text-14reg leading-[120%] ${className}`}>
      <Link
        href={link}
        className={`transition duration-300 ease-in-out active:text-blue focus-visible:text-blue
         laptop:hover:text-blue`}
      >
        {title}
      </Link>
    </li>
  );
}
