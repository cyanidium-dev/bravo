"use client";

import { motion, Variants } from "framer-motion";
import { ElementType, PropsWithChildren } from "react";
import { fadeInAnimation } from "@/helpers/animation";

interface AnimatedWrapperProps extends PropsWithChildren {
  as?: ElementType; // Будь-який HTML-елемент
  className?: string;
  animation?: Variants; // Кастомна анімація
  viewport?: { once?: boolean; amount?: number };
}

export default function AnimatedWrapper({
  as: Component = motion.div, // За замовчуванням анімований div
  className = "",
  animation = fadeInAnimation({}),
  viewport = { once: true, amount: 0.2 },
  children,
}: AnimatedWrapperProps) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewport}
      variants={animation}
      className={className}
    >
      {children}
    </Component>
  );
}
