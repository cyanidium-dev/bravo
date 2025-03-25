import Link from "next/link";
import MainButton from "../../buttons/MainButton";
import { useCartStore } from "@/store/cartStore";

export default function CartTotal() {
  const { getTotalAmount, cartItems } = useCartStore();
  const total = getTotalAmount();
  return (
    <div className="fixed bottom-0 left-0 w-full px-[30px] lg:px-9 py-9 bg-black rounded-tr-[16px] rounded-tl-[16px]">
      <div className="flex flex-row justify-between mb-8 lg:mb-7 text-white">
        <p>Загальна вартість</p>
        <p className="text-20med lg:text-24med leading-[123%]">
          {total}&nbsp;грн
        </p>
      </div>
      <Link href="/checkout">
        <MainButton disabled={!cartItems?.length} className="w-full">
          Оформити замовлення
        </MainButton>
      </Link>
    </div>
  );
}
