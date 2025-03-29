import { motion } from "framer-motion";
import { burgerMenuButtonVariants } from "@/helpers/animation";

interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

export default function BurgerMenuButton({
  isHeaderMenuOpened = false,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <motion.button
      variants={burgerMenuButtonVariants}
      viewport={{ once: true, amount: 0.2 }}
      initial="hidden"
      animate="visible"
      exit="exit"
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="lg:hidden group relative z-[60] w-10 h-10 px-[6.6px] py-[10px] outline-none before:content-['']
           before:absolute before:-z-10 before:top-[2px] before:left-0 before:rounded-full before:size-10 before:opacity-0 before:transition 
           before:duration-1000 before:ease-out active:before:opacity-30 before:bg-green before:blur-[4px]"
    >
      <div className="w-full h-full relative">
        {/* Верхня лінія */}
        <motion.span
          className="absolute w-full h-[1.8px] rounded-md"
          initial={{
            top: "2px",
            left: "0",
            opacity: 1,
            backgroundColor: "currentColor",
          }}
          animate={
            isHeaderMenuOpened
              ? {
                  top: "11px", // Переміщаємо в центр
                  left: "0",
                  opacity: 0,
                  backgroundColor: "#000", // Чорний, коли меню відкрите
                }
              : {
                  top: "2px", // Повертаємо на початкове місце
                  left: "0",
                  opacity: 1,
                  backgroundColor: "currentColor", // Білий, коли меню закрите
                }
          }
          transition={{ duration: 0.7, ease: "easeOut" }} // Плавний перехід
        />

        {/* Середня лінія */}
        <motion.span
          className="absolute w-full h-[1.8px] rounded-md"
          initial={{ top: "11px", left: "0", backgroundColor: "currentColor" }}
          animate={
            isHeaderMenuOpened
              ? { rotate: "45deg", backgroundColor: "#000" } // Обертання при відкритому меню
              : { rotate: "0deg", backgroundColor: "currentColor" } // Повертаємо назад
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* Нижня лінія */}
        <motion.span
          className="absolute w-full h-[1.6px] rounded-md"
          initial={{ top: "20px", left: "0", backgroundColor: "currentColor" }}
          animate={
            isHeaderMenuOpened
              ? { rotate: "-45deg", top: "11px", backgroundColor: "#000" } // Обертання і переміщення при відкритому меню
              : { rotate: "0deg", top: "20px", backgroundColor: "currentColor" } // Повертаємо назад
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
    </motion.button>
  );
}
