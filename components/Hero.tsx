import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "./ui/background-beams";
import { ModelViewer } from "./model-viewer";

const Hero = () => {
  const words = ["career", "salary", "opportunities"];
  return (
    <div className="pb-2 pt-6">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        {/**<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      {/* <BackgroundBeams /> */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-gray dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* <ModelViewer /> */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code™´
           */}
          {/* <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}
          <div className="h-[40rem] flex flex-col justify-center items-center px-4">
            <p className="uppercase tracking-widest whitespace-nowrap text-s text-center text-neutral-400 my-4 max-w-80">
              LEARN W1TH THE MAGIC OF THE W3B
            </p>
            <div className="text-6xl mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-center">
              Learn to code with expert teachers and boost your <br />
              <FlipWords words={words} /> <br />
            </div>
          </div>

          {/**
           * / <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
           * LEARN W1TH THE MAGIC OF THE W3B I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>
           */}

          <a href="#about">
            <MagicButton
              title="About More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
