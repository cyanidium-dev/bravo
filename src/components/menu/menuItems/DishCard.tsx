import DishCardButton from "@/components/shared/buttons/DishCardButton";
import { Dish } from "@/types/dish";
import Image from "next/image";

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  console.log(dish);
  const { image, title, price, weight } = dish;

  return (
    <li className="relative flex flex-col justify-end overflow-hidden w-[46.67%] aspect-[140/250] rounded-[8px]">
      <Image
        src={image.url}
        alt={image.alt}
        sizes="50vw"
        fill
        className="relative -z-10 object-cover"
      />
      <div className="px-2 py-[7px]">
        <div className="px-[10px] py-2 rounded-[6px] bg-white bg-opacity-[16%] backdrop-blur-[30px] shadow-inner-custom">
          <h3 className="min-h-[29.5px] mb-[6px] text-12bold leading-[123%] text-white line-clamp-2">
            {title}
          </h3>
          <div className="mb-[17px] flex items-center justify-between text-white">
            <p className="text-8semi leading-[123%]">{price}&nbsp;грн</p>
            <p className="text-8reg leading-[123%]">{weight}&nbsp;г</p>
          </div>
          <DishCardButton>Замовити страву</DishCardButton>
        </div>
      </div>
    </li>
  );
}
