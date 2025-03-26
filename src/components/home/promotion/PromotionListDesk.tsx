"use client";
import { useState } from "react";
import DishCard from "@/components/menu/menuItems/DishCard";
import DishModal from "../../shared/modals/DishModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import { Dish } from "@/types/dish";

interface PromotionListDeskProps {
  promotion: Dish[];
}

export default function PromotionListDesk({
  promotion,
}: PromotionListDeskProps) {
  const [isDishModalOpened, setIsDishModalOpened] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish>(promotion[0]);

  return (
    <>
      <ul className="hidden md:flex gap-x-5">
        {promotion.slice(0, 4).map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            promotion={true}
            setIsDishModalOpened={setIsDishModalOpened}
            setSelectedDish={setSelectedDish}
            className="w-[calc(25%-15px)]"
          />
        ))}
      </ul>
      <DishModal
        dish={selectedDish}
        isDishModalOpened={isDishModalOpened}
        setIsDishModalOpened={setIsDishModalOpened}
      />
      <Backdrop
        isVisible={isDishModalOpened}
        onClick={() => setIsDishModalOpened(false)}
      />
    </>
  );
}
