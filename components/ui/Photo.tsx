"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[432px] xl:h-[432px] mix-blend-lighten absolute"
        >
          <Image
            src="/profilee.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 68%)",
            }}
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[460px] h-[300px] xl:h-[460px]"
          fill="transparent"
          viewBox="0 0 530 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
