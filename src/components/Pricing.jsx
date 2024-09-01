import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section
      className="overflow-hidden"
      id="pricing"
      customPaddings="pb-36 pt-16"
    >
      <div className="container relative z-2">
        <Heading
          tag="about me"
          title="Explore my Academic Journey"
          text="Key information related to my high school, college, and whats to come"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="https://www.linkedin.com/in/landon-prince/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
