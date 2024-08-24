"use client";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/ui/Experiance";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import React from "react";

export const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Skills", link: "#skills", icon: <FaTools /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Skills />
          <RecentProjects />
          <Experience />
          <Footer />
          <div className="mt-10"></div>
        </div>
      </main>
    </>
  );
}
