import React from "react";
import MagicButton from "./MagicButton";
import { Download } from "lucide-react";
import Spotlights from "./ui/Spotlights";
import GridBackGround from "./ui/GridBackGround";
import Socials from "./ui/Socials";
import Photo from "./ui/Photo";
import Stats from "./ui/Stats";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 xl:h-screen" id="home">
      <Spotlights />
      <GridBackGround />
      <div className="mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.h1
                className="h1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                Hello👋 I&apos;m <br />
                <span className="text-green">Dhaval Dudheliya.</span>
              </motion.h1>
              <motion.p
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-xl font-semibold ml-1 text-yellow-200"
              >
                a Full Stack Developer,
              </motion.p>
              <motion.p
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="max-w-[500px] mt-4 mb-9 text-white/80 ml-1"
              >
                based in India📍. I excel at crafting elegant digital
                experiences and I am proficient in various programming languages
                and technologies.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
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
            </motion.div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 z-20">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
