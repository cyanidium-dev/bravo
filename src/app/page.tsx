import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Offer from "@/components/home/offer/Offer";
import Hero from "@/components/home/hero/Hero";
import Promotion from "@/components/home/promotion/Promotion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Promotion />
        <Offer />
      </main>
      <Footer />
    </>
  );
}
