import { CYANIDIUM_URL, CYANIDIUM_NAME } from "@/constants/constants";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center tab:flex-row tab:justify-between mt-[69px] tab:mt-[52px] text-16reg leading-[130%] text-white">
      <p className="mb-4">© 2025 Bravo</p>
      <div className="flex gap-x-[2px] tab:gap-x-[4px]">
        <p>Сайт розробили - </p>
        <a
          href={CYANIDIUM_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="cyanidium.dev link"
          className="lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
        >
          {CYANIDIUM_NAME}
        </a>
      </div>
    </div>
  );
}
