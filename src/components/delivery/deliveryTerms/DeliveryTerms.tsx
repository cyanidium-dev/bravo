import DeliveryTermsList from "./DeliveryTermsList";
import Image from "next/image";
import Discount from "./Discount";

export default function DeliveryTerms() {
  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[90px] pb-[120px]">
        <div className="flex flex-col md:flex-row gap-x-9 xl:gap-x-12">
          <div className="md:w-[48.1%]">
            <h2 className="mb-8 lg:mb-[42px] text-28bold xl:text-40bold leading-[123%] uppercase">
              Зони та час доставки
            </h2>
            <div className="mb-8 md:mb-0 aspect-[300/175] md:aspect-[549/350] lg:aspect-[549/265] rounded-[8px] md:rounded-[14px] overflow-hidden">
              <Image
                src="/images/delivery/deliveryTerms/imageFirst.webp"
                alt="vine bottles"
                width={906}
                height={1365}
                className="md:hidden w-full h-full object-cover"
              />
              <Image
                src="/images/delivery/deliveryTerms/imageSecond.webp"
                alt="pita"
                width={910}
                height={1365}
                className="hidden md:block w-full h-full object-cover object-[center_66%]"
              />
            </div>
          </div>
          <div className="md:flex flex-col-reverse justify-between md:w-[47.7%]">
            <DeliveryTermsList />
            <div className="mt-8 md:mt-0 aspect-[300/175] md:aspect-[544/132] rounded-[8px] md:rounded-[14px] overflow-hidden">
              <Image
                src="/images/delivery/deliveryTerms/imageSecond.webp"
                alt="pita"
                width={910}
                height={1365}
                className="md:hidden w-full h-full object-cover"
              />
              <Image
                src="/images/delivery/deliveryTerms/imageFirst.webp"
                alt="vine bottles"
                width={906}
                height={1365}
                className="hidden md:block w-full h-full object-cover object-[center_62%]"
              />
            </div>
          </div>
        </div>
        <Discount />
      </div>
    </section>
  );
}
