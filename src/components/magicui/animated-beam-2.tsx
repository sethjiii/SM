"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AuroraText } from "./aurora-text";
import { Beam } from "../ui/cover";
import { BorderBeam } from "../ui/border-beam";
import { Palette, HammerIcon } from 'lucide-react';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-25 fill-black">
          <BorderBeam />
            <p className="text-black font-bold">SM</p>
          </Circle>
        </div>
        <div className="flex flex-col fill-black justify-center gap-2">
          <Circle ref={div1Ref} className="size-25 fill-black">
            <p className="text-black font-semibold">🎨 Brand Layer</p>
          </Circle>
          <Circle ref={div2Ref} className="size-25 fill-black">
            <p className="text-black font-semibold">🛠️ Product Layer</p>
          </Circle>
          <Circle ref={div3Ref} className="size-25 fill-black">
            <p className="text-black font-semibold">📣 GTM Layer</p>
          </Circle>
          <Circle ref={div4Ref} className="size-25 fill-black">
            <p className="text-black font-semibold">🧠 MarTech Layer</p>
          </Circle>
          <Circle ref={div5Ref} className="size-25 fill-black">
            <p className="text-black font-semibold">📊 Growth Layer</p>
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};


