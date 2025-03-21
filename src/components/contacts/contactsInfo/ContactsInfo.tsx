import Image from "next/image";
import ContactsList from "./ContactsList";

export default function ContactsInfo() {
  return (
    <section className="container xl:max-w-[1280px] py-[120px] xl:pt-20">
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
    </section>
  );
}
