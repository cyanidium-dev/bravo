import SectionTitle from "@/components/shared/titles/SectionTitle";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] py-[120px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-[18px] mb-[60px] tab:mb-[58px]">
          <SectionTitle className="md:w-[53.6%]">Наша місія</SectionTitle>
          <p className="md:w-[39%]">
            Ми хочемо зробити здоровий спосіб життя простим і приємним. Готуючи
            для вас, ми обираємо тільки натуральні, свіжі та екологічні
            продукти, щоб кожен прийом їжі приносив максимум користі.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row justify-between mb-[341px] md:mb-[123px]">
          <div className="w-full md:w-[53.6%] aspect-[300/200] md:aspect-[611/407] rounded-[12px] md:rounded-[18px] overflow-hidden">
            <Image
              src="/images/about/mission/imageFirst.webp"
              alt="woman with phone"
              width={1365}
              height={910}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative md:w-[44.6%]">
            <div className="w-full aspect-[300/200] md:aspect-[509/328] mb-5 rounded-[12px] md:rounded-[18px] overflow-hidden">
              <Image
                src="/images/about/mission/imageSecond.webp"
                alt="two people"
                width={1365}
                height={910}
                className="w-full h-full object-cover"
              />
            </div>
            <SectionTitle>Радість смаку</SectionTitle>
            <Image
              src="/images/about/mission/tomatoes.webp"
              alt="tomatoe"
              width={696}
              height={614}
              className="md:hidden absolute -z-10 bottom-[-312px] left-[-87px] w-[348px] h-auto"
            />
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row md:justify-between gap-y-[60px] md:gap-x-5">
          <div className="flex flex-col gap-y-[18px] md:flex-col-reverse md:justify-end md:gap-y-[62px] md:w-[53.6%]">
            <SectionTitle className="md:max-w-[201px] xl:max-w-[321px] md:ml-auto md:mb-[62px]">
              Насолода кожного моменту
            </SectionTitle>
            <p>
              Ласкаво просимо до Bravo – місця, де здорове харчування
              поєднується зі смаком, якістю та зручністю! Ми створили цей сервіс
              для тих, хто хоче харчуватися корисно, збалансовано та без
              компромісів щодо смаку. Наша філософія – тільки найкраще для
              вашого тіла та душі. Ми не просто готуємо їжу, а дбаємо
              про здоров’я, енергію та гарний настрій кожного нашого клієнта.
            </p>
          </div>
          <div className="w-full md:w-[44.6%] aspect-[300/200] md:aspect-[509/458] rounded-[12px] md:rounded-[18px] overflow-hidden">
            <Image
              src="/images/about/mission/imageThird.webp"
              alt="shawerma"
              width={910}
              height={1365}
              className="w-full h-full object-cover"
            />
          </div>
          <Image
            src="/images/about/mission/tomatoes.webp"
            alt="tomatoe"
            width={696}
            height={614}
            className="hidden md:block absolute -z-10 bottom-[-72px] left-[-197px] lg:left-[-127px] xl:left-[-197px] md:w-[384px] xl:w-[481px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
