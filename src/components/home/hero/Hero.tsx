import PageTitle from "@/components/shared/titles/PageTitle";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="relative pt-[173px] pb-[104px] xl:pt-[140px] xl:pb-[50px] overflow-hidden">
      <HeroImages />
      <div className="container xl:max-w-[1280px]">
        {" "}
        <PageTitle className="mb-6">
          Смакуй нешкідливе – замовляй смачну їжу вже зараз!
        </PageTitle>
        <p className="text-white">
          Готуємо для вас свіжу, збалансовану та корисну їжу, яка дарує енергію
          та насолоду без шкоди для здоров’я. Замовляйте легко – отримуйте
          швидко!
        </p>
        <p className="text-20bold text-white uppercase text-center">
          Швидка доставка до 30 хв нешкідливих страв для вас!
        </p>
      </div>
    </section>
  );
}
