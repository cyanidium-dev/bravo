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
        className=" min-w-[300px] max-w-[368px] tab:max-w-[496px] lg:max-w-[909px] w-[83.33%] tab:w-[496px] lg:w-[909px]"
      >
        <div className="w-full lg:flex">
          <div className="relative w-full lg:w-[48%] lg:h-full aspect-[300/219] lg:aspect-[437/640] rounded-[16px] overflow-hidden">
            <Image
              src={image.url}
              alt={image.alt}
              sizes="100vw"
              fill
              className="relative -z-10 object-cover"
            />
          </div>
          <div className="lg:flex flex-col justify-between lg:w-[472px] px-5 lg:px-9 py-6 lg:py-12 mt-3 lg:mt-0">
            <div>
              {" "}
              <h3 className="mb-2 lg:mb-3 text-20bold lg:text-24bold uppercase leading-[123%]">
                {title}
              </h3>
              <p className="mb-4 lg:mb-5 text-16semi lg:text-20semi leading-[123%]">
                {price}&nbsp;грн
              </p>
              <p className="mb-2 lg:text-16reg leading-[123%]">
                Вага:&nbsp;{weight}&nbsp;г
              </p>
              <p className="mb-5 lg:mb-8 lg:text-16reg leading-[123%]">
                Калорійність:&nbsp;{calories}&nbsp;ккал
              </p>
              <p className="mb-10 lg:mb-9 text-12light lg:text-14light leading-[123%]">
                {description}
              </p>
              <GreenButton className="w-full text-12med py-[10px]">
                Додати в кошик
              </GreenButton>
            </div>
            <p className="mt-3 lg:mt-0 text-12light lg:text-14light leading-[123%] text-green">
              *Страва містить алергени, якщо бажаєте їх прибрати, повідомте про
              менеджеру під час оформлення замовлення
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
