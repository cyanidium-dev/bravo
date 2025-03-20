import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/home/hero/leaves.webp"
        alt="leaves"
        width={223}
        height={273}
        priority
        className="absolute -z-10 top-[107px] left-[-52px] w-[111px] h-auto"
      />
      <Image
        src="/images/home/hero/tomatoeBottom.webp"
        alt="tomatoe"
        width={275}
        height={275}
        priority
        className="absolute -z-10 bottom-[-135px] left-[-110px] w-[275px] h-auto"
      />
      <div className="absolute -z-20 top-[75px] left-[-228px] w-[593px] h-[601px] backdrop-blur-[8px] rounded-full shadow-inner-custom"></div>
    </>
  );
}
