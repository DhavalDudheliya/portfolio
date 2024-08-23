import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="pt-10">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            className,
          }) => (
            <BentoGridItem id={id} key={id} className={className} />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
