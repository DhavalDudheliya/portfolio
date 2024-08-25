import { motion } from "framer-motion";
import React from "react";

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center group">
      <motion.div
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="bg-white text-black-100 text-xs rounded py-1 px-2 shadow-lg">
          {children}
        </div>
        <div className="w-2 h-2 bg-white transform rotate-45 -mt-1 absolute left-1/2 -translate-x-1/2"></div>
      </motion.div>
    </div>
  );
};

export default Tooltip;
