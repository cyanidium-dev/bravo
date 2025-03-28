"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Variants } from "framer-motion";

interface AnimatedListItemProps {
  children: ReactNode;
  className: string;
  variants?: Variants;
  onClick?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function AnimatedListItem({
  children,
  className = "",
  variants = itemVariants,
  onClick,
}: AnimatedListItemProps) {
  return (
    <motion.li
      variants={variants}
      viewport={{ once: true }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
}
