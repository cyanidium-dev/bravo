import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AddToCartAnimation() {
  const { isCartAnimating, cartAnimationKey, animatingImage } = useCartStore();

  const cartButton = document.getElementById("cart-button");

  const cartButtonTop = cartButton?.getBoundingClientRect()?.top;
  const cartButtonLeft = cartButton?.getBoundingClientRect()?.left;

  const addToCartButton = document.getElementById("add-to-cart-button");

  const addToCartButtonTop = addToCartButton?.getBoundingClientRect()?.top;
  const addToCartButtonLeft = addToCartButton?.getBoundingClientRect()?.left;

  if (cartButtonLeft && addToCartButtonLeft) {
    console.log(cartButtonLeft - addToCartButtonLeft);
  }

  console.log(cartButtonTop, cartButtonLeft);
  console.log(addToCartButtonTop, addToCartButtonLeft);
  console.log(animatingImage);

  return (
    <>
      {isCartAnimating && (
        <motion.div
          key={cartAnimationKey} // змінюємо ключ, щоб перезапустити анімацію
          className="fixed z-[100]"
          style={{
            top: addToCartButtonTop, // Відстань від кнопки
            left: addToCartButtonLeft,
          }}
          initial={{ scale: 1 }}
          animate={{
            scale: 0.4,
            y:
              cartButtonTop !== undefined && addToCartButtonTop !== undefined
                ? cartButtonTop - addToCartButtonTop
                : 0, // Безпечне значення за замовчуванням
            x: [
              0,
              cartButtonLeft !== undefined && addToCartButtonLeft !== undefined
                ? (addToCartButtonLeft - cartButtonLeft) * 0.4
                : 0, // Безпечне значення за замовчуванням,
              cartButtonLeft !== undefined && addToCartButtonLeft !== undefined
                ? cartButtonLeft - addToCartButtonLeft
                : 0, // Безпечне значення за замовчуванням
            ],
            opacity: 0,
            transition: {
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.4, 1],
            },
          }}
        >
          <Image
            src={animatingImage?.url || ""}
            alt={animatingImage?.alt || ""}
            width={50}
            height={50}
            className="rounded-full"
          />
        </motion.div>
      )}
    </>
  );
}
