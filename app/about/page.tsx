"use client";

// Correct imports
import React from "react"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
// import CanvasReveal from "@/components/canvas-reveal"

export const About = () => {
  // Timeline data for integration
  const timelineData = [
    {
      title: "2020",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            Founded with a vision to revolutionize property management.
          </p>
          <Image
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels image
            alt="History"
            width={500}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            Launched AI-powered property matching system.
          </p>
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels image
            alt="History"
            width={500}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            Expanded to 15 countries with 50,000+ properties under management.
          </p>
          <Image
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels image
            alt="History"
            width={500}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screenbg-gray-50 dark:bg-neutral-800 py-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Discover Mansio's story and mission in property management.
          </p>
        </div>
      </section>

      {/* Mission/Vision Section */}
      {/* <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Column */}
          {/* <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#996830] dark:text-[#7a5525]">
              Our Mission
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Deliver innovative property management through technology.
            </p>
          </motion.div> */}

          {/* Vision Column */}
          {/* <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#996830] dark:text-[#7a5525]">
              Our Vision
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Become the global leader in luxury property management by 2030.
            </p>
          </motion.div>
        </div> */}
      {/* </section> */}

      {/* Core Values Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-neutral-900 dark:text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Core Values
          </motion.h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                // description:
                //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Innovation",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Excellence",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ].map((value, index) => (
              <Card key={index} title={value.title}>
                <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover/card:opacity-100 transition duration-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-neutral-900 dark:text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Journey
          </motion.h2>

          {/* Timeline Component Integration */}
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels image
              alt="Team"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#996830] dark:text-[#7a5525]">
              Meet Our Team
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Experts with decades of real estate and tech experience.
            </p>
            <Button
              variant="default"
              className="bg-[#996830] text-white hover:bg-[#7a5525]"
            >
              <Link href="/team" className="flex items-center">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Simplified Card Component
const Card = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/card relative overflow-hidden rounded-lg shadow-lg h-96 w-full"
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 group-hover/card:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center">
        <h3 className="text-white text-xl font-bold mb-4 opacity-0 group-hover/card:opacity-100 transition duration-300">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default About;