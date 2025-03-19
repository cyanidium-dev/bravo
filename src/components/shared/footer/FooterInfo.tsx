import {
  PHONE,
  EMAIL,
  ADDRESS_LINK_FIRST,
  ADDRESS_LINK_SECOND,
  ADDRESS_SECOND,
  ADDRESS_FIRST,
} from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";

export default function FooterInfo() {
  return (
    <ul className="flex flex-col tab:flex-row tab:justify-between xl:gap-x-4 tab:mt-6 text-14light leading-[120%] text-white">
      <li>
        <div className="mb-4">
          Тел.:
          <a
            href={`tel:+${PHONE.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="phone number"
            className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          >
            {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
          </a>
        </div>
        <div>
          Email:
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
            aria-label="email"
          >
            {EMAIL}
          </a>
        </div>
      </li>
      <li className="mt-auto">
        <a
          href={ADDRESS_LINK_FIRST}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block mb-4 lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p className="mb-2">{ADDRESS_FIRST}</p>
        </a>
        <a
          href={ADDRESS_LINK_SECOND}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p>{ADDRESS_SECOND}</p>
        </a>
      </li>
    </ul>
  );
}
