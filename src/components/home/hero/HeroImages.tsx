import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/home/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1664}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </>
  );
}
