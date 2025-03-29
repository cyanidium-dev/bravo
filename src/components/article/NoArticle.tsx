import AnimatedWrapper from "../shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function NoArticle() {
  return (
    <section className="container pt-[220px] pb-[120px]">
      <AnimatedWrapper
        as="p"
        animation={fadeInAnimation({ y: 30 })}
        className="text-32bold leading-[123%] text-black/50 uppercase text-center"
      >
        На жаль, даної статті не існує
      </AnimatedWrapper>
    </section>
  );
}
