"use client";

import CountUp from "react-countup";

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
    <section className="pt-4 pb-2 xl:pt-28">
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
                  delay={1}
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
    </section>
  );
};

export default Stats;
