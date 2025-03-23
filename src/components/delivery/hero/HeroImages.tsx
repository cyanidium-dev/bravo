import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <div className="absolute -z-20 top-[320px] xl:top-[212px] left-[calc(50%-537px)] w-[1055px] h-[1068px] backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"></div>
      <Image
        src="/images/delivery/hero/tomatoeSmallMob.webp"
        alt="tomatoe"
        width={263}
        height={337}
        priority
        className="lg:hidden absolute -z-10 bottom-[214px] left-[calc(50%-178px)] w-[137px] h-auto"
      />
      <Image
        src="/images/delivery/hero/tomatoeSmallDesk.webp"
        alt="tomatoe"
        width={427}
        height={452}
        priority
        className="hidden lg:block absolute -z-10 bottom-[0px] left-[calc(50%-530px)] w-[226px] h-auto"
      />
      <Image
        src="/images/delivery/hero/tomatoeLargeMob.webp"
        alt="tomatoe"
        width={367}
        height={368}
        priority
        className="lg:hidden absolute -z-10 bottom-[172px] right-[calc(50%-257px)] w-[184px] h-auto"
      />
      <Image
        src="/images/delivery/hero/tomatoeLargeDesk.webp"
        alt="tomatoe"
        width={486}
        height={250}
        priority
        className="hidden lg:block absolute -z-30 bottom-0 right-[calc(50%-556px)] w-[307px] h-auto"
      />
      <Image
        src="/images/delivery/hero/tomatoeLeftMob.webp"
        alt="tomatoe"
        width={468}
        height={468}
        priority
        className="lg:hidden absolute -z-30 bottom-[193px] left-[calc(50%-302px)] w-[234px] h-auto"
      />
      <Image
        src="/images/delivery/hero/leaveDesk.webp"
        alt="leaves"
        width={217}
        height={193}
        priority
        className="hidden lg:block absolute bottom-[45px] right-[calc(50%-458px)] w-[108px] h-auto"
      />
    </>
  );
}
