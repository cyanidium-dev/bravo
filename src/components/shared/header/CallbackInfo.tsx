import GreenButton from "../buttons/GreenButton";
import { PHONE } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import PhoneIcon from "../icons/PhoneIcon";

export default function CallbackInfo() {
  return (
    <div className="max-w-[380px] sm:mx-auto">
      <h2 className="mt-7 mb-[26px] text-36bold uppercase leading-[130%] sm:text-center">
        Маєте додаткові питання?
      </h2>
      <a
        href={`tel:+${PHONE.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="phone number"
        className="block sm:mx-auto"
      >
        <GreenButton className="flex gap-x-[14px] items-center w-full max-w-[360px] mb-12 sm:mx-auto text-white">
          <PhoneIcon className="size-6" />
          {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
        </GreenButton>
      </a>
    </div>
  );
}
