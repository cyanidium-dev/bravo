"use client";
import { useState } from "react";
import DishCard from "@/components/menu/menuItems/DishCard";
import DishModal from "../../shared/modals/DishModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import CartModal from "@/components/shared/modals/cartModal/CartModal";
import { Dish } from "@/types/dish";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";

interface PromotionListDeskProps {
  promotion: Dish[];
}

export default function PromotionListDesk({
  promotion,
}: PromotionListDeskProps) {
  const [isDishModalOpened, setIsDishModalOpened] = useState(false);
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish>(promotion[0]);

  return (
    <>
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={listVariants({ staggerChildren: 0.5, delayChildren: 0.8 })}
        className="hidden sm:flex gap-x-5"
      >
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
      </AnimatedWrapper>
      <DishModal
        dish={selectedDish}
        isDishModalOpened={isDishModalOpened}
        setIsDishModalOpened={setIsDishModalOpened}
        setIsCartModalOpened={setIsCartModalOpened}
      />
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isDishModalOpened || isCartModalOpened}
        onClick={() => {
          setIsDishModalOpened(false);
          setIsCartModalOpened(false);
        }}
      />
    </>
  );
}
