import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <div className="absolute -z-20 top-[103px] md:top-[140px] xl:top-[107px] left-[-215px] xl:left-[-319px] w-[575px] md:w-[730px] xl:w-[1068px] h-[582px] md:h-[739px] xl:h-[1114px] backdrop-blur-[16px] rounded-full shadow-inner-custom">
        <Image
          src="/images/about/hero/tomatoesSmallDesk.webp"
          alt="tomatoe"
          width={494}
          height={511}
          priority
          className="hidden md:block absolute -z-10 md:top-[200px] lg:top-[240px] xl:top-[384px] md:left-[570px] xl:left-[902px] w-[247px] h-auto"
        />
      </div>
      <Image
        src="/images/about/hero/tomatoeSmallMob.webp"
        alt="tomatoe"
        width={458}
        height={400}
        priority
        className="md:hidden absolute -z-10 bottom-0 left-[62px] w-[229px] h-auto"
      />
      <Image
        src="/images/about/hero/tomatoesLargeDesk.webp"
        alt="tomatoe"
        width={761}
        height={370}
        priority
        className="hidden md:block absolute -z-30 bottom-0 md:left-[250px] xl:left-[500px] w-[365px] h-auto"
      />
    </>
  );
}
