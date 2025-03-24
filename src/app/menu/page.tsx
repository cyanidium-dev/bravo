import Menu from "@/components/menu/Menu";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import { Suspense } from "react";

export default function MenuPage() {
  return (
    <>
      <Header variant="black" />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Menu />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
