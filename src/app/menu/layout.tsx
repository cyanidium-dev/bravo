import { GET_MENU_BANNER } from "@/lib/datoCmsQueries";
import { getDataFromCms } from "@/utils/getDataFromCms";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Hero from "@/components/menu/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { ReactNode, Suspense } from "react";

interface CmsResponse {
  data: {
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
  };
}

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const res: CmsResponse = await getDataFromCms(GET_MENU_BANNER);

  const banner = res?.data?.banner;

  return (
    <div>
      <Header variant="black" />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Hero banner={banner} />
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
