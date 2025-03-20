interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

const firstLineBaseStyles = "top-[2px] left-0 opacity-100 bg-current";
const firstLineTransformStyles = "top-[-2px] left-[3px] opacity-0 bg-black";
const secondLineBaseStyles = "top-[11px] left-0 bg-current";
const secondLineTransformStyles = "rotate-[-45deg] top-[11px] bg-black";
const thirdLineBaseStyles = "top-[20px] left-0 bg-current";
const thirdLineTransformStyles = "rotate-45 top-[11px] bg-black";

export default function BurgerMenuButton({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="lg:hidden group relative z-[60] w-10 h-10 px-[6.6px] py-[10px] outline-none before:content-['']
           before:absolute before:-z-10 before:top-[2px] before:left-0 before:rounded-full before:size-10 before:opacity-0 before:transition 
           before:duration-1000 before:ease-out active:before:opacity-30 before:bg-green before:blur-[4px]"
    >
      <div className="w-full h-full rotate-0 ">
        <span
          className={`block absolute w-full h-[1.8px] rounded-md  rotate-0 
                  transition duration-[600ms] ease-out ${
                    isHeaderMenuOpened
                      ? firstLineTransformStyles
                      : firstLineBaseStyles
                  }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[1.8px] rounded-md rotate-0 
                  transition duration-[600ms] ease-out ${
                    isHeaderMenuOpened
                      ? secondLineTransformStyles
                      : secondLineBaseStyles
                  }`}
        ></span>
        <span
          className={`block absolute left-0 w-full h-[1.6px] rounded-md rotate-0  
                  transition duration-[600ms] ease-out ${
                    isHeaderMenuOpened
                      ? thirdLineTransformStyles
                      : thirdLineBaseStyles
                  }`}
        ></span>
      </div>
    </button>
  );
}
