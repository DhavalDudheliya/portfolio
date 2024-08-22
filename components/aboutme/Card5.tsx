import React from "react";

const Card5 = () => {
  return (
    <>
      <div className="w-full h-full absolute">
        <img
          src="/b5.svg"
          alt=""
          className="object-cover object-center absolute right-0 bottom-0 md:w-96 w-60"
        />
      </div>
      <div className="absolute right-0 -bottom-5 w-full opacity-80">
        <img
          src="/grid.svg"
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center">
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          The inside scoop
        </div>

        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          Currently learning React Native
        </div>
      </div>
      ;
    </>
  );
};

export default Card5;
