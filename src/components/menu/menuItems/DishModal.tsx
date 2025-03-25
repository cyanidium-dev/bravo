import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Modal from "@/components/shared/modals/Modal";
import { Dish } from "@/types/dish";
import GreenButton from "@/components/shared/buttons/GreenButton";

interface DishModalProps {
  dish: Dish | null;
  isDishModalOpened: boolean;
  setIsDishModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function DishModal({
  isDishModalOpened,
  setIsDishModalOpened,
  dish,
}: DishModalProps) {
  if (!dish) {
    return null;
  }
  const { image, title, price, weight, calories, description } = dish;

  return (
    <>
      <Modal
        isPopUpShown={isDishModalOpened}
        setIsPopUpShown={setIsDishModalOpened}
      >
        <div className="relative w-full aspect-[300/219] rounded-[16px] overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt}
            sizes="100vw"
            fill
            className="relative -z-10 object-cover"
          />
        </div>
        <div className="px-5 py-6 mt-3">
          <h3 className="mb-2 text-20bold uppercase leading-[123%]">{title}</h3>
          <p className="mb-4 text-16semi leading-[123%]">{price}&nbsp;грн</p>
          <p className="mb-2 leading-[123%]">Вага:&nbsp;{weight}&nbsp;г</p>
          <p className="mb-5 leading-[123%]">
            Калорійність:&nbsp;{calories}&nbsp;г
          </p>
          <p className="mb-10 text-12light leading-[123%]">{description}</p>
          <GreenButton className="w-full text-12med py-[10px]">
            Додати в кошик
          </GreenButton>
          <p className="mt-3 text-12light leading-[123%] text-green">
            *Страва містить алергени, якщо бажаєте їх прибрати, повідомте про
            менеджеру під час оформлення замовлення
          </p>
        </div>
      </Modal>
    </>
  );
}
