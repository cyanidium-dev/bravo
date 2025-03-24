import { GET_ALL_DISHES } from "@/lib/datoCmsQueries";
import { getDataFromCms } from "@/utils/getDataFromCms";
import { Category } from "@/types/category";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Hero from "@/components/menu/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { ReactNode, Suspense } from "react";
import HydrateStore from "@/store/hydrate-store";

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
    allCategories: Category[];
  };
}

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const res: CmsResponse = await getDataFromCms(GET_ALL_DISHES);

  const banner = res?.data?.banner;

  const allCategories = res?.data?.allCategories;

  return (
    <div>
      <Header variant="black" />
      <Suspense fallback={<Loader />}>
        <Hero banner={banner} />
      </Suspense>
      <HydrateStore categories={allCategories}> {children}</HydrateStore>
      <Footer />
    </div>
  );
}
