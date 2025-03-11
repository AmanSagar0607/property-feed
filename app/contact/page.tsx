"use client";

// Correct imports
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-32">
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
            Get in Touch
          </motion.h1>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            We’d love to hear from you! Whether you have a question or just want
            to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Form Column */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#996830] dark:text-[#7a5525]">
                Contact Us
              </h2>
              {isSubmitted ? (
                <div className="text-green-600 dark:text-green-400 text-lg font-medium">
                  Thank you for reaching out! We’ll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-[#996830] focus:border-[#996830] dark:bg-neutral-800 dark:text-neutral-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-[#996830] focus:border-[#996830] dark:bg-neutral-800 dark:text-neutral-200"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="mt-1 block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-[#996830] focus:border-[#996830] dark:bg-neutral-800 dark:text-neutral-200"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-[#996830] text-white hover:bg-[#7a5525]"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels image
                alt="Contact Us"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="space-y-2">
              <div className="flex justify-center items-center text-[#996830] dark:text-[#7a5525] text-4xl">
                📞
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                +1 (123) 456-7890
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="flex justify-center items-center text-[#996830] dark:text-[#7a5525] text-4xl">
                ✉️
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                info@example.com
              </p>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex justify-center items-center text-[#996830] dark:text-[#7a5525] text-4xl">
                📍
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                123 Main Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}