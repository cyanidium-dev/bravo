import { ButtonProps } from "@/types/buttonProps";

export default function GreenButton({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center px-4 leading-[130%] rounded-full 
        bg-green text-white transition duration-300 ease-out active:scale-95 lg:hover:brightness-125 focus-visible:brightness-125
      
   ${className}`}
    >
      {children}
    </button>
  );
}
