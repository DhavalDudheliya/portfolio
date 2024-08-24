import { skills } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full pt-32 pb-10" id="skills">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] mb-10">
          My <span className="text-green">Skills</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center max-w-lg lg:max-w-[65vw]">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 border rounded-full h-20 w-20 flex items-center justify-center"
            >
              <img src={skill.img} className="h-12 w-12" alt="React" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
