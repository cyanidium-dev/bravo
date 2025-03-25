"use client";
import { Dispatch, SetStateAction } from "react";
import DishCardButton from "@/components/shared/buttons/DishCardButton";
import { Dish } from "@/types/dish";
import Image from "next/image";

interface DishCardProps {
  dish: Dish;
  setIsDishModalOpened: Dispatch<SetStateAction<boolean>>;
  setSelectedDish: Dispatch<SetStateAction<Dish>>;
}

export default function DishCard({
  dish,
  setIsDishModalOpened,
  setSelectedDish,
}: DishCardProps) {
  const { image, title, price, weight } = dish;

  const handleClick = () => {
    setSelectedDish(dish);
    setIsDishModalOpened(true);
  };

  return (
    <li
      className="relative flex flex-col justify-end overflow-hidden w-[46.67%] xs:w-[calc(33.3%-13.3px)] lg:w-[calc(25%-15px)] 
    xl:w-[calc(33.3%-13.3px)] aspect-[140/250] xl:aspect-[270/432] rounded-[8px] xl:rounded-[16px]"
    >
      <Image
        src={image.url}
        alt={image.alt}
        sizes="50vw"
        fill
        className="relative -z-10 object-cover"
      />
      <div className="px-2 xl:px-4 py-[7px] xl:py-5">
        <div className="px-[10px] xl:px-[18px] py-2 xl:py-[15px] rounded-[6px] bg-white bg-opacity-[16%] backdrop-blur-[30px] shadow-inner-custom">
          <h3 className="min-h-[29.5px] xl:min-h-[44px] mb-[6px] xl:mb-2 text-12bold xl:text-18bold leading-[123%] text-white line-clamp-2">
            {title}
          </h3>
          <div className="mb-[17px] flex items-center justify-between text-white">
            <p className="text-8semi xl:text-12semi leading-[123%]">
              {price}&nbsp;грн
            </p>
            <p className="text-8reg xl:text-12reg leading-[123%]">
              {weight}&nbsp;г
            </p>
          </div>
          <DishCardButton onClick={handleClick}>Замовити страву</DishCardButton>
        </div>
      </div>
    </li>
  );
}
