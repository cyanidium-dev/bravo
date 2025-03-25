import { useCartStore } from "@/store/cartStore";
import CartListItem from "./CartItem";

export default function CartList() {
  const { cartItems } = useCartStore();

  return (
    <>
      {cartItems.length > 0 ? (
        <ul
          className="flex flex-col gap-y-4 h-[calc(100dvh-272px-40px)] lg:h-[calc(100dvh-300px-40px)] pr-[10px] overflow-y-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-green/70"
        >
          {cartItems.map((cartItem, idx) => (
            <CartListItem key={idx} cartItem={cartItem} />
          ))}
        </ul>
      ) : (
        <div className="text-16reg lg:text-18reg leading-[123%] text-center py-[100px] text-black/50">
          Ваш кошик порожній
        </div>
      )}
    </>
  );
}
