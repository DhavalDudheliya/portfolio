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
  // Hook for heading
  const { ref: headingRef, inView: isHeadingInView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="py-20" id="projects">
      {/* Animate the heading */}
      <motion.h1
        ref={headingRef}
        className="heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isHeadingInView ? 1 : 0,
          y: isHeadingInView ? 0 : 50,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        A small selection of <span className="text-green">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, live }, index) => {
            // Hook for each project card
            const { ref, inView } = useInView({
              triggerOnce: true, // Animation triggers only once
              threshold: 0.1, // Trigger when 10% of the component is visible
            });

            return (
              <motion.div
                key={id}
                ref={ref}
                className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vh]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] mb-5 h-[30vh] rounded-xl">
                    <img src={img} alt={title} className="z-10" />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p className="mt-1 font-extralight text-sm line-clamp-2 text-white/80">
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
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
