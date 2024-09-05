import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export default function ScreenQueryInfo(props: Props) {
  const debug = process.env.DEBUG;

  if (debug === "yes")
    return (
      <div
        className={cn(
          "fixed bottom-0 right-0 z-[10000] flex gap-2 bg-black p-3 text-white",
          props.className,
        )}
      >
        <span>screen:</span>
        <span className="block sm:hidden">full</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
      </div>
    );
}
