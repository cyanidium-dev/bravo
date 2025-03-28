"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import CartListItem from "../shared/modals/cartModal/CartItem";

export default function OrderInfo() {
  const { getTotalAmount, cartItems } = useCartStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalAmount());
  }, [getTotalAmount, cartItems]);

  return (
    <div className="">
      <h2 className="mb-6 text-20med leading-[123%]">Ваше замовлення</h2>
      <>
        {cartItems.length > 0 ? (
          <ul
            className="flex flex-col md:flex-row md:flex-wrap xl:flex-col xl:flex-nowrap gap-y-4 xl:gap-y-[15px] md:gap-x-5 
          xl:h-[294px] xl:overflow-y-auto xl:pr-2 scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-green/70"
          >
            {cartItems.map((cartItem, idx) => (
              <li key={idx} className="md:w-[calc(50%-10px)] xl:w-full">
                {" "}
                <CartListItem cartItem={cartItem} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-16reg lg:text-18reg leading-[123%] text-center py-[100px] text-black/50">
            Ваш кошик порожній
          </div>
        )}
        <div className="flex flex-row items-center justify-between mt-6 mb-4 xl:pr-2">
          <p>Загальна вартість</p>
          <p className="text-20med lg:text-24med leading-[123%]">
            {total}&nbsp;грн
          </p>
        </div>
      </>
    </div>
  );
}
