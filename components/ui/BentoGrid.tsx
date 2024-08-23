import { cn } from "@/lib/utils";

import Card3 from "../aboutme/Card3";
import Card1 from "../aboutme/Card1";
import Card2 from "../aboutme/Card2";
import Card4 from "../aboutme/Card4";
import Card5 from "../aboutme/Card5";
import Card6 from "../aboutme/Card6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
}: {
  className?: string;
  id: number;
}) => {

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {id === 1 && <Card1 />}
        {id === 2 && <Card2 />}
        {id === 3 && <Card3 />}
        {id === 4 && <Card4 />}
        {id === 5 && <Card5 />}
        {id === 6 && <Card6 />}
      </div>
    </div>
  );
};
