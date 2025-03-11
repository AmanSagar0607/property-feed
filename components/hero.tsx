"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/hero-video-dialog";
import SplitText from "@/components/split-text";
import CircularText from "@/components/circular-text";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch((err) => console.error("Video play failed:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  const EASE_OUT_CUBIC: number[] = [0.33, 1, 0.68, 1];

  return (
    <section
      ref={ref}
      className="relative pt-40 pb-24 w-full overflow-hidden flex flex-col bg-white dark:bg-black/30"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-5 flex flex-col items-center justify-center px-4 text-center text-black dark:text-white flex-grow">
        <motion.h1
          className="mb-6 font-serif text-5xl font-light tracking-tight md:text-7xl lg:text-[75px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.span
            className="font-light text-[#2C2C2C] dark:text-[#868384]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your Key to{" "}
          </motion.span>
          <SplitText
            text="Luxury Living"
            className="font-medium text-[#996830] dark:text-[#996830]"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing={EASE_OUT_CUBIC}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={() =>
              console.log("Luxury Living animation complete!")
            }
          />
        </motion.h1>

        <motion.p
          className="text-[20px] text-neutral-700 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <span className="font-light">
            Discover exceptional properties curated for the discerning individual.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          <Button
            className="bg-[#996830] text-white hover:bg-[#b88e4b] transition-all text-sm"
          >
            <Link href="/properties" className="text-sm md:text-sm lg:text-lg xl:text-lg">Explore Properties</Link>
          </Button>
          <Button
            variant="outline"
            className="text-black border-black dark:text-white dark:border-white hover:bg-white/10 transition-all"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>

      {/* Video Dialog */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <HeroVideoDialogDemoTopInBottomOut />
      </motion.div>
    </section>
  );
}