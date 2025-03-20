import SectionTitle from "@/components/shared/titles/SectionTitle";
import GreenButton from "@/components/shared/buttons/GreenButton";
import Link from "next/link";

export default function Promotion() {
  return (
    <section className="pt-[120px] pb-[99px]">
      <div className="container xl:max-w-[1280px] flex flex-col gap-y-9 md:flex-row items-center justify-between">
        <SectionTitle className="text-center md:text-left">
          Акційні товари
        </SectionTitle>
        <Link
          href="/menu"
          className="block w-full max-w-[326px] mx-auto md:mx-0"
        >
          <GreenButton className="w-full">Переглянути меню</GreenButton>
        </Link>
      </div>
    </section>
  );
}
