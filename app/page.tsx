"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <HomeIcon /> }]}
        />
        <Hero />
        <Grid/>
        <div className="mt-10"></div>
      </div>
    </main>
  );
}
