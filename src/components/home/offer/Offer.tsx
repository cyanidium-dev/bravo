import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Offer() {
  return (
    <section className="bg-green pt-16 pb-[70px]">
      <div className="lg:flex lg:justify-between lg:items-center mb-[225px] lg:mb-[147px]">
        <SectionTitle variant="white" className="mb-5 lg:mb-0">
          Наша унікальна пропозиція
        </SectionTitle>
        <p className="text-white">
          Ми – це не просто доставка їжі, а ваш партнер у здоровому харчуванні!
        </p>
      </div>
    </section>
  );
}
