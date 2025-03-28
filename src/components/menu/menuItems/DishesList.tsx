"use client";
import { Fragment, useState } from "react";
import DishCard from "./DishCard";
import Pagination from "@/components/shared/pagination/Pagination";
import { useDishesPerPage } from "@/hooks/useDishesPerPage";
import DishModal from "../../shared/modals/DishModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import CartModal from "@/components/shared/modals/cartModal/CartModal";
import { Dish } from "@/types/dish";

interface DishesListProps {
  dishesList: Dish[];
}

export default function DishesList({ dishesList }: DishesListProps) {
  const [isDishModalOpened, setIsDishModalOpened] = useState(false);
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish>(dishesList[0]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Pagination
        items={dishesList}
        scrollTargetId="menu"
        useItemsPerPage={useDishesPerPage}
        className="w-full mb-[26px] xl:mb-[70px]"
        renderItems={(currentItems) => (
          <ul className="flex flex-wrap gap-x-5 gap-y-6 xl:gap-y-5 mt-10 xl:mt-0">
            {currentItems.map((dish, idx) => (
              <Fragment key={idx}>
                <DishCard
                  dish={dish}
                  setIsDishModalOpened={setIsDishModalOpened}
                  setSelectedDish={setSelectedDish}
                  className="w-[calc(50%-10px)] xs:w-[calc(33.3%-13.3px)] lg:w-[calc(25%-15px)] 
                      xl:w-[calc(33.3%-13.3px)]"
                />
              </Fragment>
            ))}
          </ul>
        )}
      />
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
    </div>
  );
}
