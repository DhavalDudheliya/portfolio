import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../ui/GradientBg";
import MagicButton from "../MagicButton";
import { CopyIcon } from "lucide-react";

const Card6 = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
      </BackgroundGradientAnimation>

      <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 py-5 justify-center md:max-w-full max-w-80 text-center">
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mb-3`}
        >
          Do you want to start a project together?
        </div>
        <div className="font-sans font-extralight w-auto md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          Let’s create something amazing together!
        </div>
        <div className="mt-2 relative">
          <div
            className={`absolute -bottom-5 right-0 ${
              copied ? "block" : "block"
            }`}
          ></div>

          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<CopyIcon />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>
      </div>
    </>
  );
};

export default Card6;
