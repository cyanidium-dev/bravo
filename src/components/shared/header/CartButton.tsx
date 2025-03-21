import CartIcon from "../icons/CartIcon";

interface CartButtonProps {
  className?: string;
  variant: "white" | "black";
}

export default function CartButton({ variant, className }: CartButtonProps) {
  return (
    <button
      className={`flex items-center justify-center size-[44px] rounded-[14px] ${
        variant === "white" ? "text-black bg-white" : "text-white bg-black"
      } ${className}`}
    >
      <CartIcon />
    </button>
  );
}
