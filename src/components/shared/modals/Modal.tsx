import { Dispatch, ReactNode, SetStateAction } from "react";

import IconButton from "../buttons/IconButton";
import IconClose from "../icons/IconClose";

interface ModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export default function Modal({
  isPopUpShown,
  setIsPopUpShown,
  children,
}: ModalProps) {
  return (
    <div
      className={`${
        isPopUpShown
          ? " -translate-y-[calc(50dvh-50%)] opacity-100 scale-100"
          : "pointer-events-none opacity-0 scale-90"
      } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-50 min-w-[300px] max-w-[368px] tab:max-w-[496px] 
      w-[83.33%] tab:w-[496px] max-h-[100dvh] overflow-y-auto bg-white rounded-[16px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-green/70 popup-scroll`}
    >
      <div className="absolute z-[60] top-0 right-0 size-[44px]">
        <IconButton
          handleClick={() => setIsPopUpShown(false)}
          className="p-[10px] bg-white rounded-[8px]"
        >
          {<IconClose className="size-full" />}
        </IconButton>
      </div>
      {children}
    </div>
  );
}
