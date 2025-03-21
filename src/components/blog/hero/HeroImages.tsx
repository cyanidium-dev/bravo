import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/blog/hero/leaves.webp"
        alt="leaves"
        width={239}
        height={259}
        priority
        className="xl:hidden absolute -z-10 bottom-[-30px] left-[-49px] w-[120px] h-auto"
      />
      <Image
        src="/images/blog/hero/leavesDesk.webp"
        alt="leaves"
        width={556}
        height={182}
        priority
        className="hidden xl:block absolute -z-10 bottom-0 left-[calc(50%-477px)] w-[278px] h-auto"
      />
      <Image
        src="/images/blog/hero/leave.webp"
        alt="leaves"
        width={88}
        height={91}
        priority
        className="absolute z-10 bottom-[183px] xl:bottom-[189px] left-[calc(50%-44px+133px)] xl:left-[calc(50%-44px+227px)] w-[44px] xl:w-[83px] h-auto"
      />
      <div
        className="absolute -z-20 bottom-[-780px] xl:bottom-[-698px] left-[calc(50%-528px)] w-[1055px] h-[1068px] 
      backdrop-blur-[16px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      ></div>
    </>
  );
}
