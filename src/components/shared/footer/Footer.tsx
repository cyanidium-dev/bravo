import Logo from "../logo/Logo";
import FooterBottom from "./FooterBottom";
import NavMenu from "./NavMenu";
import FooterInfo from "./FooterInfo";
import SocialsList from "./SocialsList";

export default function Footer() {
  return (
    <footer className="w-dvw pt-20 pb-[50px] bg-black">
      <div className="container max-w-[1280px]">
        <Logo className="text-40bold text-white" />
        <div className="flex justify-between mt-[60px]">
          <NavMenu />
          <FooterInfo />
        </div>
        <SocialsList />
        <FooterBottom />
      </div>
    </footer>
  );
}
