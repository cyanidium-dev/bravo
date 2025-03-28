"use client";
import "swiper/css";
import "swiper/css/navigation";
import "./sliderStyles.css";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dish } from "@/types/dish";
import DishCard from "@/components/menu/menuItems/DishCard";
import DishModal from "../../shared/modals/DishModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface PromotionListMobProps {
  promotion: Dish[];
}

export default function PromotionListMob({ promotion }: PromotionListMobProps) {
  const [isDishModalOpened, setIsDishModalOpened] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish>(promotion[0]);

  return (
    <AnimatedWrapper
      className="sm:hidden"
      animation={fadeInAnimation({ y: 50, delay: 0.6 })}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        navigation={true}
        loop={true}
        speed={1000}
        modules={[Navigation]}
      >
        {promotion.map((dish, idx) => (
          <SwiperSlide key={idx}>
            <DishCard
              dish={dish}
              promotion={true}
              setIsDishModalOpened={setIsDishModalOpened}
              setSelectedDish={setSelectedDish}
            />
          </SwiperSlide>
        ))}
        <div className="hidden tabxl:block absolute z-[5] -top-6 right-[-100px] w-[260px] h-[331px] bg-sliderGradient blur-lg supports-[backdrop-filter]:blur-lg will-change-transform"></div>
      </Swiper>
      <DishModal
        dish={selectedDish}
        isDishModalOpened={isDishModalOpened}
        setIsDishModalOpened={setIsDishModalOpened}
      />
      <Backdrop
        isVisible={isDishModalOpened}
        onClick={() => setIsDishModalOpened(false)}
      />
    </AnimatedWrapper>
  );
}
