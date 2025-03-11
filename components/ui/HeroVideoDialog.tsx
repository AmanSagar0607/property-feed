/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants: Record<AnimationStyle, { initial: any; animate: any; exit: any }> = {
  "from-center": {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  },
  // Add other animation styles here
  "from-bottom": {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.2 } },
  },
  "top-in-bottom-out": {
    initial: undefined,
    animate: undefined,
    exit: undefined
  },
  "from-top": {
    initial: undefined,
    animate: undefined,
    exit: undefined
  },
  "from-left": {
    initial: undefined,
    animate: undefined,
    exit: undefined
  },
  "from-right": {
    initial: undefined,
    animate: undefined,
    exit: undefined
  },
  fade: {
    initial: undefined,
    animate: undefined,
    exit: undefined
  },
  "left-in-right-out": {
    initial: undefined,
    animate: undefined,
    exit: undefined
  }
};

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle] as { initial: any; animate: any; exit: any };

  return (
    <div className={cn("relative", className)}>
      <div className="group relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full rounded-md border shadow-lg transition-all duration-300 ease-out group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex size-16 lg:size-24 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md transition-all duration-300 group-hover:scale-105">
            <div className="flex size-8 lg:size-16 items-center justify-center rounded-full bg-primary text-white dark:text-black shadow-lg transition-all duration-300 ease-out group-hover:scale-110">
              <Play className="size-4 lg:size-8" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md"
          >
            <motion.div {...selectedAnimation} className="relative w-full max-w-5xl p-4 mt-20">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-6 -right-8 rounded-full bg-neutral-900/50 p-2 text-white backdrop-blur-md"
              >
                <XIcon className="size-5" />
              </button>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <video
                  src={videoSrc}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
