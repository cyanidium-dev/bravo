"use client";

import { motion, Variants } from "framer-motion";
import { ElementType, PropsWithChildren } from "react";
import { fadeInAnimation } from "@/helpers/animation";

interface AnimatedWrapperProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
  animation?: Variants;
  viewport?: { once?: boolean; amount?: number };
}

export default function AnimatedWrapper({
  as: Component = "div", // ✅ Тепер це коректно працює
  className = "",
  animation = fadeInAnimation({}),
  viewport = { once: true, amount: 0.2 },
  children,
}: AnimatedWrapperProps) {
  const MotionComponent = motion(Component) as ElementType; // 🔥 Основний фікс!

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewport}
      variants={animation}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
