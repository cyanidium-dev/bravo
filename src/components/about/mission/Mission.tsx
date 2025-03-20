import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="container xl:max-w-[1280px] py-[120px]">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-[18px] mb-[60px] tab:mb-[58px]">
        <SectionTitle>Наша місія</SectionTitle>
        <p>
          Ми хочемо зробити здоровий спосіб життя простим і приємним. Готуючи
          для вас, ми обираємо тільки натуральні, свіжі та екологічні продукти,
          щоб кожен прийом їжі приносив максимум користі.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 md:flex-row justify-between mb-[341px]">
        <div className="w-full aspect-[300/200] rounded-[12px] md:rounded-[18px] overflow-hidden">
          <Image
            src="/images/about/mission/imageFirst.webp"
            alt="woman with phone"
            width={1365}
            height={910}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="w-full aspect-[300/200] mb-5 rounded-[12px] md:rounded-[18px] overflow-hidden">
            <Image
              src="/images/about/mission/imageSecond.webp"
              alt="two people"
              width={1365}
              height={910}
              className="w-full h-full object-cover"
            />
          </div>
          <SectionTitle>Радість смаку</SectionTitle>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-y-[60px]">
        <div className="flex flex-col gap-y-[18px] md:flex-col-reverse md:gap-y-[62px]">
          <SectionTitle>Насолода кожного моменту</SectionTitle>
          <p>
            Ласкаво просимо до Bravo – місця, де здорове харчування поєднується
            зі смаком, якістю та зручністю! Ми створили цей сервіс для тих, хто
            хоче харчуватися корисно, збалансовано та без компромісів щодо
            смаку. Наша філософія – тільки найкраще для вашого тіла та душі. Ми
            не просто готуємо їжу, а дбаємо про здоров’я, енергію та гарний
            настрій кожного нашого клієнта.
          </p>
        </div>
        <div className="w-full aspect-[300/200] rounded-[12px] md:rounded-[18px] overflow-hidden">
          <Image
            src="/images/about/mission/imageThird.webp"
            alt="two people"
            width={910}
            height={1365}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
