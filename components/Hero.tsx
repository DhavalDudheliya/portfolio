import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { Download } from "lucide-react";
import Spotlights from "./ui/Spotlights";
import GridBackGround from "./ui/GridBackGround";
import Socials from "./ui/Socials";
import Photo from "./ui/Photo";
import Stats from "./ui/Stats";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 xl:h-screen">
      <Spotlights />
      <GridBackGround />
      <div className="mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Develoepr</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-green">Dhaval Dudheliya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elelgant digital experiances and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <MagicButton
                title="Download CV"
                icon={<Download height={20} width={20} color="#00ff99" />}
                position="right"
                cv={true}
              />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green rounded-full flex justify-center items-center text-green text-base hover:bg-green hover:text-black-100 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};


export default Hero;
