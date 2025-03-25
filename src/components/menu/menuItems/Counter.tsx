"use client";
import IconMinus from "@/components/shared/icons/IconMinus";
import { CartItem } from "@/types/cartItem";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { Dish } from "@/types/dish";
import IconPlus from "@/components/shared/icons/IconPlus";

interface CounterProps {
  dish: Dish;
}

export default function Counter({ dish }: CounterProps) {
  const { increaseQuantity, decreaseQuantity, cartItems } = useCartStore();
  const [count, setCount] = useState(1);
  const { id } = dish;
  const getItemCount = (items: CartItem[], itemId: string): number => {
    return items.find((item) => item.id === itemId)?.quantity || 0;
  };

  useEffect(() => {
    setCount(getItemCount(cartItems, id));
  }, [cartItems, id]);

  const onMinusClick = () => {
    decreaseQuantity(id);
    setCount(count - 1);
  };

  const onPlusClick = () => {
    increaseQuantity(id);
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-between w-full px-6 py-[7px] lg:py-[9px] border-[1.5px] border-black rounded-full">
      <button
        className="group flex items-center justify-center size-5 enabled:active:scale-95 transition duration-300 ease-out"
        onClick={onMinusClick}
        disabled={count === 0}
        aria-label="minus"
      >
        <IconMinus className="size-[14px]" />
      </button>
      <span className="">{count}</span>
      <button
        className="flex items-center justify-center size-5 enabled:active:scale-95 transition duration-300 ease-out"
        onClick={onPlusClick}
        aria-label="plus"
      >
        <IconPlus className="size-[14px]" />
      </button>
    </div>
  );
}
