import Image from "next/image";

interface HeroProps {
  banner: {
    bannerMob: {
      url: string;
      alt: string;
    };
    bannerDesk: {
      url: string;
      alt: string;
    };
  };
}

export default function Hero({ banner }: HeroProps) {
  if (!banner) {
    return null;
  }

  const { bannerMob, bannerDesk } = banner;
  return (
    <section className="container xl:max-w-[1280px] overflow-hidden pt-[108px] pb-[84px] md:pb-[52px]">
      <div
        className="aspect-[300/439] md:aspect-[1140/429] rounded-[10px] md:rounded-[20px] 
      overflow-hidden"
      >
        <Image
          src={bannerMob.url}
          alt={bannerMob.alt}
          width={300}
          height={439}
          className="md:hidden w-full h-full object-cover"
        />
        <Image
          src={bannerDesk.url}
          alt={bannerDesk.alt}
          width={1140}
          height={429}
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
