import OrderInfo from "./OrderInfo";

export default function Checkout() {
  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[108px] xl:pt-[136px] pb-[120px] xl:pb-[120px]">
        <h1 className="mb-10 text-24semi xl:text-36semi leading-[123%]">
          Оформлення замовлення
        </h1>
        <OrderInfo />
      </div>
    </section>
  );
}
