"use client";

// Correct imports <button class="citation-flag" data-index="1">
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"; // Import Canvas Reveal Effect
import { TextReveal } from "@/components/ui/text-reveal"; // Import TextReveal component
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const CoreValues = () => {
  // Core values data
  const coreValues = [
    {
      title: "Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      colors: [[139, 92, 246], [67, 56, 202]], // Purple gradient
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      colors: [[236, 72, 153], [232, 121, 249]], // Pink gradient
    },
    {
      title: "Excellence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      colors: [[125, 211, 252]], // Blue gradient
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-6">
        {/* Section Header with TextReveal */}
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-900 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TextReveal>Our Core Values</TextReveal>
        </motion.h2>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} title={value.title} colors={value.colors}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black/50"
                colors={value.colors}
                dotSize={2}
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover/canvas-card:opacity-100 transition duration-300">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Card Component with Canvas Reveal Effect
const Card = ({
  title,
  colors,
  children,
}: {
  title: string;
  colors: number[][];
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card relative overflow-hidden rounded-lg shadow-lg h-96 w-full"
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 group-hover/canvas-card:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center">
        <h3 className="text-white text-xl font-bold mb-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-300">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default CoreValues;