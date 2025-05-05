import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Book, Globe, Database, Laptop } from "lucide-react";
import { Button } from "./ui/MovingBorders";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: [
      { name: "Javascript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Globe },
      { name: "NextJS", icon: Globe },
      { name: "Redux", icon: Database },
      { name: "Tailwind CSS", icon: Globe },
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Code2 },
      { name: "Bootstrap", icon: Globe },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "NodeJS", icon: Server },
      { name: "ExpressJS", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma ORM", icon: Database },
      { name: "Drizzle ORM", icon: Database },
    ],
  },
  {
    category: "Tools & Others",
    icon: Laptop,
    technologies: [
      { name: "Git", icon: Code2 },
      { name: "GitHub", icon: Code2 },
      { name: "Gitlab", icon: Code2 },
      { name: "Postman", icon: Globe },
      { name: "VS Code", icon: Code2 },
      { name: "Jira", icon: Book },
      { name: "AWS (Beginner)", icon: Server },
      { name: "ElectronJs", icon: Globe },
    ],
  },
];

const TechItem = ({ name, icon: Icon, index }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        x: inView ? 0 : -20 
      }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-opacity-10 hover:bg-green-500 transition-all duration-300"
      whileHover={{ x: 5 }}
    >
      <div className="p-1 rounded-full bg-opacity-20 bg-green-500">
        <Icon className="h-4 w-4 text-green" />
      </div>
      <span className="text-gray-700 dark:text-gray-300">
        {name}
      </span>
    </motion.li>
  );
};

const SkillsSection = () => {
  // Hook for heading
  const { ref: headingRef, inView: isHeadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 w-full">
      {/* Animate the heading */}
      <motion.h1
        ref={headingRef}
        className="heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isHeadingInView ? 1 : 0,
          y: isHeadingInView ? 0 : 50,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Technical <span className="text-green">Skills</span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full mt-12 flex"
      >
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon;
          return (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full flex-1 flex justify-center items-start"
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full w-[320px]"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-green bg-opacity-20">
                      <SkillIcon className="h-6 w-6 text-green" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold">
                      {skill.category}
                    </h2>
                  </div>
                  
                  <ul className="space-y-1 flex-1">
                    {skill.technologies.map((tech, techIndex) => (
                      <TechItem 
                        key={tech.name} 
                        name={tech.name} 
                        icon={tech.icon} 
                        index={techIndex} 
                      />
                    ))}
                  </ul>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsSection;