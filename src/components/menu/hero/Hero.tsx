import Image from "next/image";

interface HeroProps {
  banner: {
    bannerMob: {
      url: string;
    };
    bannerMobxl: {
      url: string;
    };
    bannerTab: {
      url: string;
    };
    bannerDesk: {
      url: string;
    };
  };
}

export default function Hero({ banner }: HeroProps) {
  if (!banner) {
    return null;
  }

  const { bannerMob, bannerDesk, bannerMobxl, bannerTab } = banner;

  return (
    <section className="container xl:max-w-[1280px] overflow-hidden pt-[108px] pb-[84px] md:pb-[52px]">
      <div
        className="aspect-[300/439] xs:aspect-[440/439] sm:aspect-[768/439] lg:aspect-[1140/429] rounded-[10px] md:rounded-[20px] 
      overflow-hidden"
      >
        <Image
          src={bannerMob.url}
          alt="menu banner"
          width={300}
          height={439}
          className="xs:hidden w-full h-full object-cover"
        />
        <Image
          src={bannerMobxl.url}
          alt="menu banner"
          width={440}
          height={439}
          className="hidden xs:block sm:hidden w-full h-full object-cover"
        />
        <Image
          src={bannerTab.url}
          alt="menu banner"
          width={768}
          height={439}
          className="hidden sm:block lg:hidden w-full h-full object-cover"
        />
        <Image
          src={bannerDesk.url}
          alt="menu banner"
          width={1140}
          height={429}
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
