"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Lifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#FFFBEB] dark:bg-[#0E0E0E]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-[#2C2C2C] dark:text-[#868384]">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <motion.div style={{ y: y1, opacity }} className="space-y-6">
            <h2 className="font-serif text-5xl font-light leading-tight md:text-6xl dark:text-[#996830] text-[#996830]">
              Embrace the <br />
              <span className="font-medium">Lifestyle</span>
            </h2>
            <TextGenerateEffect
              words="Curated properties that go beyond mere accommodation, offering a gateway to an elevated way of living. Each residence is selected for its unique character and exceptional quality."
              textClassName="text-lg text-neutral-300 max-w-md text-[#2C2C2C] dark:text-[#868384]"
            />
          </motion.div>

          <motion.div style={{ y: y2, opacity }} className="space-y-6">
            <TextGenerateEffect
              words="Our portfolio spans from alpine retreats nestled in pristine mountain landscapes to coastal villas with panoramic ocean views. Each property is chosen not just for its architectural merit, but for the lifestyle it enables."
              textClassName="text-lg text-neutral-300 text-[#2C2C2C] dark:text-[#868384]"
            />
            <TextGenerateEffect
              words="Whether you seek the tranquility of nature, the vibrancy of urban living, or the serenity of coastal settings, our collection offers the perfect backdrop for creating lasting memories."
              textClassName="text-lg text-neutral-300 text-[#2C2C2C] dark:text-[#868384]"
            />
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div className="mt-28 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src="https://images.pexels.com/photos/16261824/pexels-photo-16261824/free-photo-of-modern-design-of-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src="https://images.pexels.com/photos/12119220/pexels-photo-12119220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-lg md:col-span-2 lg:col-span-1"
          >
            <Image
              src="https://images.pexels.com/photos/27270523/pexels-photo-27270523/free-photo-of-a-living-room-with-a-large-tree-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}