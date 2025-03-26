import { Dispatch, SetStateAction } from "react";
import IconButton from "../../buttons/IconButton";
import IconClose from "../../icons/IconClose";
import Image from "next/image";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

interface CartModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartModal({
  isPopUpShown,
  setIsPopUpShown,
}: CartModalProps) {
  return (
    <div
      className={`${
        isPopUpShown
          ? "translate-x-0 opacity-100"
          : "translate-x-full pointer-events-none opacity-0"
      } fixed z-[70] top-0 right-0 w-dvw h-dvh max-w-[515px] transition duration-[600ms] ease-out 
     bg-white max-h-[100dvh]`}
    >
      <div className="flex flex-col justify-between">
        <div className="absolute z-[70] top-[14px] lg:top-[39px] right-5 lg:right-[26px] size-[44px]">
          <IconButton
            handleClick={() => setIsPopUpShown(false)}
            className="p-[10px] bg-white rounded-[8px]"
          >
            {<IconClose className="size-full" />}
          </IconButton>
        </div>
        <div className="pl-[30px] pr-5 lg-px-9 pt-6 lg:pt-[42px]">
          <div className="flex items-center gap-x-[18px] mb-9 pr-[10px]">
            <Image
              src="/images/icons/cart.svg"
              alt="cart icon"
              width="36"
              height="36"
              className="size-7 lg:size-9"
            />
            <h3 className="text-24semi lg:text-32semi leading-[123%]">Кошик</h3>
          </div>
          <CartList />
        </div>
      </div>
      <CartTotal setIsPopUpShown={setIsPopUpShown} />
    </div>
  );
}
