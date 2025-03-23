import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import DeliveryTermsList from "./DeliveryTermsList";
import Image from "next/image";
import Discount from "./Discount";

export default function DeliveryTerms() {
  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[90px] pb-[120px]">
        <SectionTitle className="mb-8">Зони та час доставки</SectionTitle>
        <div className="mb-8 aspect-[300/175] rounded-[8px] overflow-hidden">
          <Image
            src="/images/delivery/deliveryTerms/imageFirst.webp"
            alt="vine bottles"
            width={906}
            height={1365}
            className="w-full h-full object-cover"
          />
        </div>
        <DeliveryTermsList />
        <div className="mt-8 aspect-[300/175] rounded-[8px] overflow-hidden">
          <Image
            src="/images/delivery/deliveryTerms/imageSecond.webp"
            alt="pita"
            width={910}
            height={1365}
            className="w-full h-full object-cover"
          />
        </div>
        <Discount />
      </div>
    </section>
  );
}
