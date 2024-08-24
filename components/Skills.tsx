/* eslint-disable @next/next/no-img-element */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skills } from "@/data";
import React from "react";

const Skills = () => {
  // Hook for heading
  const { ref: headingRef, inView: isHeadingInView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  // Hook for each skill logo
  const { ref: skillRef, inView: isSkillInView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="w-full pt-32 pb-10" id="skills">
      <div className="flex flex-col items-center">
        {/* Animate the heading */}
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
              <motion.div
                key={skill.id}
                ref={skillRef}
                className="p-4 border rounded-full h-20 w-20 flex items-center justify-center"
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
                <img src={skill.img} className="h-12 w-12" alt={skill.name} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
