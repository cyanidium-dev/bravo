import DeliveryTermItem from "./DeliveryTermItem";

export default function DeliveryTermsList() {
  const deliveryTermsList = [
    "Доставка здійснюється по місту Бровари.",
    "Доставка здійснюється щоденно з 09:00 до 22:00 кожного дня.",
    "Ми доставляємо замовлення як на домашню адресу, так і в офіси, щоб ви могли насолоджуватися корисною їжею будь-де.",
  ];
  return (
    <ul className="flex flex-col gap-6">
      {deliveryTermsList.map((termItem, idx) => (
        <DeliveryTermItem key={idx} termItem={termItem} />
      ))}
    </ul>
  );
}
