import Image from "next/image";
import ContactsList from "./ContactsList";

export default function ContactsInfo() {
  return (
    <section className="overflow-hidden">
      <div className="relative container xl:max-w-[1280px] py-[120px] xl:pt-20">
        <ContactsList />
        <div className="mt-[100px] sm:mt-[44px] w-full h-[245px] rounded-[16px] overflow-hidden">
          <Image
            src="/images/contacts/contactsInfo/map.webp"
            alt="map"
            width={2280}
            height={490}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <Image
          src="/images/contacts/contactsInfo/tomatoeBottomMob.webp"
          alt="tomatoe"
          width={436}
          height={387}
          priority
          className="md:hidden absolute -z-10 bottom-[12px] right-[-20px] w-[218px] h-auto"
        />
        <Image
          src="/images/contacts/contactsInfo/tomatoeBottomDesk.webp"
          alt="tomatoe"
          width={436}
          height={486}
          priority
          className="hidden md:block absolute -z-10 bottom-[12px] right-0 w-[218px] h-auto"
        />
        <Image
          src="/images/contacts/contactsInfo/tomatoeTopDesk.webp"
          alt="tomatoe"
          width={449}
          height={419}
          priority
          className="hidden md:block absolute -z-10 bottom-[210px] left-0 w-[225px] h-auto"
        />
      </div>
    </section>
  );
}
