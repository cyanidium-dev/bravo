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
    <div className="xl:p-7 xl:border xl:border-black xl:rounded-[8px]">
      <h2 className="mb-6 text-20med leading-[123%]">Ваше замовлення</h2>
      <>
        {cartItems.length > 0 ? (
          <ul className="flex flex-col gap-y-4">
            {cartItems.map((cartItem, idx) => (
              <CartListItem key={idx} cartItem={cartItem} />
            ))}
          </ul>
        ) : (
          <div className="text-16reg lg:text-18reg leading-[123%] text-center py-[100px] text-black/50">
            Ваш кошик порожній
          </div>
        )}
        <div className="flex flex-row items-center justify-between mt-6 mb-4">
          <p>Загальна вартість</p>
          <p className="text-20med lg:text-24med leading-[123%]">
            {total}&nbsp;грн
          </p>
        </div>
      </>
    </div>
  );
}
