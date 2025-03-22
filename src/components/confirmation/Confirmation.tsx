export default function Confirmation() {
  return (
    <section>
      <div className="container xl:max-w-[1280px] pt-[455px] pb-[120px] xl:pt-[505px]">
        <h1 className="mb-[18px] text-32semi xl:text-40semi uppercase leading-[123%] text-center">
          Дякуємо за замовлення!
        </h1>
        <p className="mb-7 text-18reg xl:text-20reg leading-[123%] text-center">
          Орієнтовний час доставки 25-30 хв
        </p>
        <p className="text-14light xl:text-16light leading-[123%] text-center">
          Наш менеджер скоро зв’яжеться з вами для підтвердження замовлення
        </p>
      </div>
    </section>
  );
}
