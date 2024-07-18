import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features" customPaddings="pt-0 pb-28">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="My Foundational Work "
          tag="portfolio"
          text="Projects that define my programming journey"
        />

        <div className="flex justify-center flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="border-[0.01rem] border-[#423d6385] rounded-[2rem] block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              style={
                {
                  // backgroundImage: `url(${item.backgroundUrl})`,
                }
              }
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5" style={{ color: item.color }}>
                  {item.title}
                </h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider transition-colors hover:text-color-1 pointer-events-auto"
                  >
                    Explore on GitHub
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8">
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
