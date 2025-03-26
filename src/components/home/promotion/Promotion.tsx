import SectionTitle from "@/components/shared/titles/SectionTitle";
import GreenButton from "@/components/shared/buttons/GreenButton";
import Link from "next/link";
import PromotionDesk from "./PromotionDesk";
import PromotionMob from "./PromotionMob";

export default function Promotion() {
  return (
    <section className="pt-[120px] pb-[99px]">
      <div className="container xl:max-w-[1280px]">
        <div className="flex flex-col gap-y-9 md:flex-row items-center justify-between mb-8 lg:mb-10">
          <SectionTitle className="text-center md:text-left">
            Акційні товари
          </SectionTitle>
          <Link
            href="/menu"
            className="block w-full max-w-[326px] mx-auto md:mx-0"
          >
            <GreenButton className="w-full text-16med py-4">
              Переглянути меню
            </GreenButton>
          </Link>
        </div>
        <PromotionDesk />
      </div>
      <PromotionMob />
    </section>
  );
}
