import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { Download } from "lucide-react";
import Spotlights from "./ui/Spotlights";
import GridBackGround from "./ui/GridBackGround";
import Socials from "./ui/Socials";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 h-full">
      <Spotlights />
      <GridBackGround />
      <div className="mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
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
                icon={<Download height={20} width={20} color="white" />}
                position="right"
                cv={true}
              />
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="" iconStyles="" />
              </div>
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};
// <div className="pb-20 pt-36 h-full">

/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div> */
// <div className="flex relative my-20 z-10 mx-auto h-full">
//   <div className="flex flex-col xl:flex-row items-center justify-between">
/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Dynamic Web Magic With Next.js
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md: text-5xl lg:text-6xl"
          words="Transforming Concepts into Seamless Experiences" />
        <p>Hi, I&apos;m Dhaval, a MERN Stack Developer based in India</p>

        <div>
          <MagicButton
            title="Download CV" 
            icon={<Download height={20} width={20} color="white" />}
            position="right"
            cv={true} />
        </div> */
//       <div className="text-center xl:text-left">
//         <span>Full Stack Develoepr</span>
//         <h1>
//           Hello I&apos;m <br />
//           Dhaval Dudheliya
//         </h1>
//       </div>
//       <div>Photo</div>
//     </div>
//   </div>
// </div>

export default Hero;
