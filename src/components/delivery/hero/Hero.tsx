import Image from "next/image";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/delivery/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1092}
        priority
        className="absolute -z-30 top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative container xl:max-w-[1280px] xl:pt-[334px] xl:pb-[73px]">
        <h2 className="xl:max-w-[501px] mb-5 mx-auto xl:text-48bold leading-[123%] uppercase text-center text-white">
          Умови доставки
        </h2>
        <p className="xl:max-w-[495px] mx-auto text-white text-center">
          Ми дбаємо про ваш комфорт та здоров’я, тому пропонуємо швидку та
          зручну доставку корисного харчування прямо до ваших дверей.
        </p>
        <HeroImages />
      </div>
    </section>
  );
}
