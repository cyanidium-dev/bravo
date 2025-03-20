import Image from "next/image";

export default function OffersImages() {
  return (
    <>
      <Image
        src="/images/home/offers/tomatoesDesk.webp"
        alt="tomatoes"
        width={760}
        height={474}
        className="hidden md:block absolute top-0 right-[215px] lg:right-[272px] w-[220px] lg:w-[300px] xl:w-[380px] h-auto"
      />
      <Image
        src="/images/home/offers/tomatoesMob.webp"
        alt="tomatoes"
        width={474}
        height={355}
        className="md:hidden absolute top-[195px] right-[-42px] lg:right-[272px] w-[237px] h-auto"
      />
      <Image
        src="/images/home/offers/leavesDesk.webp"
        alt="leaves"
        width={359}
        height={231}
        className="hidden md:block absolute top-[170px] xl:top-[275px] left-[22px] lg:left-[42px] w-[140px] xl:w-[180px] h-auto"
      />
    </>
  );
}
