import { cn } from "@/lib/utils";
import React from "react";

const Card3 = () => {
  const leftLists = ["ReactJS", "NodeJS", "ExpressJs"];
  const rightLists = ["NextJs", "TypeScript", "MongoDB"];
  return (
    <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 justify-center">
      <div className="font-sans font-extralight md:max-w-full text-xs text-[#C1C2D3] z-10">
        I constantly try to improve
      </div>

      <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
        My tech stack
      </div>
      <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          {leftLists.map((item, i) => (
            <span
              key={i} 
              className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-sm opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E] ${
              i == 0
                ? "text-sky-400"
                : i == 1
                ? "text-green-600"
                : "text-yellow-200"
            }`}
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
          {rightLists.map((item, i) => (
            <span
              key={i}
              className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-sm opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E] ${
              i == 0
                ? "text-white"
                : i == 1
                ? "text-blue-600"
                : "text-green-400"
            }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card3;
