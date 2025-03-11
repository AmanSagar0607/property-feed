"use client";

import { motion } from "framer-motion";
import { Home, Key, UserCheck, Clock, Shield, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const services = [
  {
    icon: Home,
    title: "Property Management",
    description:
      "Comprehensive management services for property owners, ensuring your investment is well-maintained and profitable.",
    background: (
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#996830]/10 to-transparent [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
    ),
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "Find your perfect temporary residence with our curated selection of luxury rental properties.",
    background: (
      <motion.div
        className="absolute inset-0 bg-[#996830]/10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    ),
  },
  {
    icon: UserCheck,
    title: "Tenant Screening",
    description:
      "Rigorous vetting process to ensure only qualified tenants occupy your valuable property.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for both property owners and tenants, ensuring peace of mind.",
  },
  {
    icon: Shield,
    title: "Property Insurance",
    description:
      "Comprehensive insurance options to protect your valuable real estate investments.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Services",
    description:
      "Personalized assistance for all your needs, from property maintenance to lifestyle requests.",
  },
];

export default function Services() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#996830]/10 via-transparent to-[#996830]/10 dark:from-[#7a5525]/10 dark:via-transparent dark:to-[#7a5525]/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 ">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Our <span className="text-[#996830]">Luxury Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 mt-4 pb-18">
            We offer a comprehensive range of services for both property owners and tenants, ensuring a seamless experience.
          </p>
        </motion.div>

        {/* Bento Grid with Hover Animations */}
        <BentoGrid>
          {services.map((service, index) => (
            <BentoCard
              key={index}
              Icon={service.icon}
              name={service.title}
              description={service.description}
              href="#"
              cta="Learn more"
              className={cn(
                "group relative rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-lg hover:shadow-2xl transition-all duration-300",
                index === 0 && "col-span-3 lg:col-span-1",
                index === 1 && "col-span-3 lg:col-span-2",
                index === 2 && "col-span-3 lg:col-span-2",
                index === 3 && "col-span-3 lg:col-span-1",
                index === 4 && "col-span-3 lg:col-span-1",
                index === 5 && "col-span-3 lg:col-span-2"
              )}
              background={service.background}
            >
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </BentoCard>
          ))}
        </BentoGrid>

        {/* CTA Button with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#996830] text-white hover:bg-[#7a5525] transition-colors duration-300"
          >
            <Link href="/services">Explore All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}