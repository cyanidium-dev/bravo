import Image from "next/image";

export default function Discount() {
  return (
    <div className="relative -z-20 mt-[90px] pt-[51px] pb-[136px] h-[346px] rounded-[10px] bg-discount overflow-hidden">
      <h3 className="max-w-[300px] px-[37px] py-[6px] mx-auto text-48extra leading-[123%] text-center uppercase text-transparent bg-white rounded-full">
        <span className="text-transparent bg-clip-text bg-discount">
          Знижка
        </span>
      </h3>
      <p className="max-w-[239px] mt-[12.3%] text-white text-center mx-auto">
        Якщо ви сплачуєте при отриманні готівкою, ми даруємо знижку 10%
      </p>
      <Image
        src="/images/delivery/deliveryTerms/tomatoeLeftMob.webp"
        alt="tomatoes"
        width={399}
        height={228}
        className="absolute bottom-0 left-0 -z-10 w-[200px] h-auto"
      ></Image>
      <Image
        src="/images/delivery/deliveryTerms/tomatoeRightMob.webp"
        alt="tomatoes"
        width={134}
        height={241}
        className="absolute bottom-0 right-0 -z-10 w-[67px] h-auto"
      ></Image>
    </div>
  );
}
