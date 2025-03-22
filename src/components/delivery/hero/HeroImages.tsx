import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <div className="absolute -z-20 top-[313px] xl:top-[212px] left-[calc(50%-537px)] w-[1055px] h-[1068px] backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"></div>
      <Image
        src="/images/delivery/hero/tomatoeSmallDesk.webp"
        alt="tomatoe"
        width={427}
        height={452}
        priority
        className="hidden xl:block absolute -z-10 bottom-[0px] left-[calc(50%-530px)] w-[226px] h-auto"
      />
      <Image
        src="/images/delivery/hero/tomatoeLargeDesk.webp"
        alt="tomatoe"
        width={486}
        height={250}
        priority
        className="hidden xl:block absolute -z-30 bottom-0 right-[calc(50%-556px)] w-[307px] h-auto"
      />
      <Image
        src="/images/delivery/hero/leaveDesk.webp"
        alt="leaves"
        width={217}
        height={193}
        priority
        className="hidden xl:block absolute bottom-[45px] right-[calc(50%-458px)] w-[108px] h-auto"
      />
    </>
  );
}
