import Logo from "../logo/Logo";
import FooterBottom from "./FooterBottom";
import NavMenu from "./NavMenu";
import FooterInfo from "./FooterInfo";
import SocialsList from "./SocialsList";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";

export default function Footer() {
  return (
    <footer className="w-dvw pt-20 pb-[50px] md:pb-[62px] bg-black">
      <AnimatedWrapper className="container xl:max-w-[1280px]">
        <Logo className="text-40bold md:text-64bold text-white" />
        <div className="flex md:flex-col xl:flex-row md:gap-y-8 justify-between mt-[60px] md:mt-9">
          <NavMenu />
          <FooterInfo />
        </div>
        <SocialsList />
        <FooterBottom />
      </AnimatedWrapper>
    </footer>
  );
}
