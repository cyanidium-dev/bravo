interface DeliveryTermItemProps {
  termItem: string;
}

export default function DeliveryTermItem({ termItem }: DeliveryTermItemProps) {
  return (
    <li className="flex gap-x-[18px]">
      <div className="size-4 rounded-full bg-green"></div>
      <p className="w-[88.6%] text-16reg leading-[123%]">{termItem}</p>
    </li>
  );
}
