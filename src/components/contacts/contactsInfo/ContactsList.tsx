import { PHONE, EMAIL, ADDRESS_FIRST } from "@/constants/constants";
import ContactItem from "./ContactItem";

export default function ContactsList() {
  const contactsList = [
    { icon: "", title: "Номер телефону", description: PHONE },
    { icon: "", title: "Номер телефону", description: EMAIL },
    { icon: "", title: "Номер телефону", description: ADDRESS_FIRST },
  ];

  return (
    <ul>
      {contactsList.map((contact, idx) => (
        <ContactItem key={idx} />
      ))}
    </ul>
  );
}
