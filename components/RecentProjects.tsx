/* eslint-disable @next/next/no-img-element */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { projects } from "@/data";
import React from "react";
import dynamic from "next/dynamic";
const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);
import { FaLocationArrow } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      {/* Animate the heading */}
      <h1 className="heading">
        A small selection of <span className="text-green">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, live }, index) => {
            return (
              <div
                key={id}
                className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vh]"
              >
                <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] mb-5 h-[20vh] rounded-xl">
                    <img src={img} alt={title} className="z-10" />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {title}
                  </h1>
                  <p className="mt-1 font-extralight text-sm text-white/80">
                    {des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="flex md:text-sm text-xs text-green text-right items-center gap-2">
                        Check Repository <FaLocationArrow color="white" />
                      </p>
                      {live && (
                        <p className="flex md:text-sm text-xs text-green text-right mt-2 items-center gap-2">
                          & live site <FaCircleDot color="red" />
                        </p>
                      )}
                    </div>
                  </div>
                </PinContainer>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
