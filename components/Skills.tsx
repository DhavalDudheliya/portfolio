/* eslint-disable @next/next/no-img-element */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skills } from "@/data";
import React from "react";

// Tooltip component
const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className="relative flex flex-col items-center justify-center">
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition duration-300 group-aria-pressed:opacity-100 group-aria-pressed:scale-100 ">
        <div className="bg-white text-black-100 text-xs rounded py-1 px-2">
          {children}
        </div>
        <div className="w-2 h-2 bg-white transform rotate-45 -mt-1 left-1/2 -translate-x-1/2 absolute"></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref: headingRef, inView: isHeadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: skillRef, inView: isSkillInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full pt-32 pb-10" id="skills">
      <div className="flex flex-col items-center">
        <motion.h1
          ref={headingRef}
          className="heading lg:max-w-[45vw] mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHeadingInView ? 1 : 0,
            scale: isHeadingInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          My <span className="text-green">Skills</span>
        </motion.h1>

        <div className="flex flex-wrap gap-4 justify-center max-w-lg lg:max-w-[65vw]">
          {skills.map((skill, index) => {
            return (
              <>
                <div className="group">
                  <Tooltip>{skill.name}</Tooltip>
                  <motion.div
                    key={skill.id}
                    ref={skillRef}
                    className="relative p-4 border rounded-full h-20 w-20 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isSkillInView ? 1 : 0,
                      scale: isSkillInView ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    <img
                      src={skill.img}
                      className="h-12 w-12"
                      alt={skill.name}
                    />
                  </motion.div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
