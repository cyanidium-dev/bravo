import MainButton from "@/components/shared/buttons/MainButton";
import PageTitle from "@/components/shared/titles/PageTitle";
import Link from "next/link";
import Image from "next/image";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1558}
        priority
        className="absolute -z-30 top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative container xl:max-w-[1280px] pt-[237px] md:pt-[235px] pb-[193px] md:pb-[75px]">
        <HeroImages />
        <div className="max-w-[300px] xl:max-w-[513px]">
          {" "}
          <PageTitle className="mb-5">
            Про нас – здорове харчування з любов’ю 
          </PageTitle>
          <p className="mb-8 text-white">
            Ми віримо, що корисна їжа може бути смачною, доступною та зручною.
            Саме тому створили сервіс доставки збалансованого харчування.
          </p>
          <Link
            href="/menu/all-dishes"
            className="block w-full max-w-[326px] mx-auto md:mx-0"
          >
            <MainButton className="w-full">Зробити замовлення</MainButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
