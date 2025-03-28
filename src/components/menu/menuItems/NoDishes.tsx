import { useState, useEffect } from "react";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import { fadeInAnimation } from "@/helpers/animation";

interface NoDishesProps {
  children: string;
  currentCategory: string;
}

export default function NoDishes({ children, currentCategory }: NoDishesProps) {
  const initialKey = generateOrderNumber();
  const [key, setKey] = useState(initialKey);

  useEffect(() => {
    const key = generateOrderNumber();
    setKey(key);
  }, [currentCategory]);

  return (
    <AnimatedWrapper
      viewport={{ once: true }}
      animation={fadeInAnimation({ y: 30, delay: 0.4 })}
      key={key}
      className="mx-auto pt-[200px] pb-[120px]"
    >
      <p className="xl:w-full text-24bold leading-[123%] text-black/50 uppercase text-center">
        {children}
      </p>
    </AnimatedWrapper>
  );
}
