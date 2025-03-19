import CartIcon from "../icons/CartIcon";

interface CartButtonProps {
  variant: "white" | "black";
}

export default function CartButton({ variant }: CartButtonProps) {
  return (
    <button
      className={`relative z-[60] flex items-center justify-center size-[44px] rounded-[14px] ${
        variant === "white" ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <CartIcon />
    </button>
  );
}
