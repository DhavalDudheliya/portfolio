"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const ststs = [
  {
    num: 5,
    text: "Months of experiance",
  },
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 3,
    text: "Technologies mastered",
  },
  {
    num: 320,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="pt-4 pb-2 xl:pt-28"
    >
      <div className="container mx-auto">
        <div className="inline-flex flex-wrap justify-between w-full gap-6  mx-auto xl:max-w-none">
          {ststs.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 inline-flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={1.4}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
