/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card2 = () => {
  return (
    <>
      <div className="w-full h-full absolute">
        <img
          src="/grid.svg"
          alt="grid"
          className="object-cover object-center"
        />
      </div>
      <div className={`absolute right-0 -bottom-3`}>
        <img
          src="/b4.svg"
          alt="b4"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start">
        <div
          className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
        >
          Tech enthusiast with a passion for development.
        </div>
      </div>
    </>
  );
};

export default Card2;
