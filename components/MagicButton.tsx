import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  cv: boolean;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  cv,
}: Props) => {
  return (
    <motion.button
      className="relative inline-flex h-10 lg:h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60"
      onClick={handleClick}
    >
      <span
        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${
          !cv
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            : "bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#00ff99_50%,#fff_100%)]"
        } `}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        <span
          className={`${
            cv ? "text-green" : "text-white"
          } inline-flex  items-center justify-center gap-2`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </span>
    </motion.button>
  );
};

export default MagicButton;
