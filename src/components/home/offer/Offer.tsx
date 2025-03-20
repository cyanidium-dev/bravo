import SectionTitle from "@/components/shared/titles/SectionTitle";
import OffersList from "./OffersList";
import OffersImages from "./OffersImages";

export default function Offer() {
  return (
    <section className="bg-green overflow-x-clip">
      <div className="relative container xl:max-w-[1280px] pt-16 pb-[70px] xl:py-[122px]">
        <div className="md:flex md:justify-between mb-[225px] md:mb-[147px]">
          <OffersImages />
          <SectionTitle
            variant="white"
            className="md:max-w-[412px] xl:max-w-[512px] mb-5 lg:mb-0"
          >
            Наша унікальна пропозиція
          </SectionTitle>
          <p className="md:max-w-[202px] text-white">
            Ми – це не просто доставка їжі, а ваш партнер у здоровому
            харчуванні!
          </p>
        </div>
        <OffersList />
      </div>
    </section>
  );
}
