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
      w-[83.33%] tab:w-[496px] max-h-[100dvh] overflow-y-auto bg-white rounded-[16px] `}
    >
      <div className="absolute top-3 right-3 tab:top-6 tab:right-6 size-9 tab:size-10">
        <IconButton handleClick={() => setIsPopUpShown(false)}>
          {<IconClose className="size-full" />}
        </IconButton>
      </div>
      {children}
    </div>
  );
}
