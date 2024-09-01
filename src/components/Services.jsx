import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import {
  brainwaveServices,
  brainwaveServices2,
  brainwaveServicesIcons,
} from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { smallSphere, stars } from "../assets";
import Photo from "./Photo";
import { curve } from "../assets";

const Services = () => {
  return (
    <Section id="how-to-use" customPaddings="pt-28 pb-24">
      <div className="container">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="About Me"
          title="Hello, I'm Landon"
          text="Computer science undergraduate at Vanderbilt University"
        />

        <div className="relative">
          <div className="relative z-1 flex xl:items-start items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-14 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
            <Photo
              className="hidden absolute left-[3rem] bottom-[2.7rem] xl:flex"
              title="Team Skills"
            />

            <div className="relative z-1 max-w-[22rem] ml-auto">
              <h4 className="h4 mb-4">My Background</h4>
              <p className="body-2 mb-[2.1rem] text-n-3">
                I was born and raised in Dallas, Texas. From a young age, I was
                fascinated by computers. My passion for technology only grew
                stronger, driving me to explore programming and computer
                science.
              </p>
              <h4 className="h4 mb-4">My Goals</h4>
              <p className="body-2 mb-[3rem] text-n-3 ">
                I am focusing on honing my technical skills at Vanderbilt
                University to apply my knowledge effectively. By doing so, I aim
                to make meaningful contributions to my field and drive impactful
                change.
              </p>
            </div>
          </div>
          <div className="hidden xl:flex relative z-2">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=landonprince&theme=tokyonight"
              alt=""
              className="absolute w-[37rem] lg:bottom-[5rem] lg:right-[4rem] bottom-[3rem] right-[2rem]"
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 justify-center flex flex-col p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-10">
                <h4 className="h4 mb-12 hidden lg:flex">
                  <span className="inline-block relative">
                    My Skills
                    <img
                      src={curve}
                      className="absolute top-full left-0 w-full "
                      width={624}
                      height={28}
                      alt="Curve"
                    />
                  </span>
                </h4>

                <h5 className="h6 mb-4">Technical Skills</h5>

                <ul className="body-2">
                  {brainwaveServices2.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6 w-[17rem]"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4 text-n-3">{item}</p>
                    </li>
                  ))}
                </ul>
                <h5 className="h6 mb-4 mt-10">Soft Skills</h5>

                <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6 w-[17rem]"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4 text-n-3">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Technologies I Utilize</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  C++, Java, Python, C#, C, HTML, CSS, Javascript, React,
                  Angular, Tailwind, Git, SQL, R, MATLAB, Rust, Go,
                  SystemVerilog, ARM Assembly, OpenCV, Unity, Godot, GDScript,
                  Racket.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* <VideoChatMessage />
                <VideoBar /> */}
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
