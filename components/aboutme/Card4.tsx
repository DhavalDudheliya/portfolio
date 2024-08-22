import React from "react";

const Card4 = () => {
  return (
    <>
      <div className="w-full h-full absolute">
        <img
          src="/grid.svg"
          alt="grid"
          className="object-cover object-center"
        />
      </div>
      <div className={`absolute left-0 -bottom-3`}>
        <img
          src="/b4.svg"
          alt="b4"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="group-hover/bento:-translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start text-right">
        <div
          className={`font-sans text-lg lg:text-2xl max-w-full font-bold z-10`}
        >
          Experiance in creating dynamic, responsive, and user-friendly web
          applications.
        </div>
      </div>
    </>
  );
};

export default Card4;
