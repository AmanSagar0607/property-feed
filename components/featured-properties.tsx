// "use client"

// import { useState, useRef, useEffect } from "react"
// import { motion, useAnimation, useInView } from "framer-motion"
// import { ArrowRight, ArrowLeft } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import CircularText from '@/components/circular-text';


// const featuredProperties = [
//   {
//     id: "prop1",
//     title: "Alpine Retreat",
//     location: "Gstaad, Switzerland",
//     price: "9,500,000",
//     bedrooms: 5,
//     bathrooms: 6,
//     area: 4200,
//     description:
//       "Nestled in the pristine Swiss Alps, this luxury chalet offers breathtaking mountain views and unparalleled privacy.",
//     image: "https://images.pexels.com/photos/5923080/pexels-photo-5923080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     featured: true,
//   },
//   {
//     id: "prop2",
//     title: "Coastal Villa",
//     location: "Amalfi Coast, Italy",
//     price: "7,800,000",
//     bedrooms: 4,
//     bathrooms: 5,
//     area: 3800,
//     description:
//       "Perched on the cliffs of the Amalfi Coast, this villa offers panoramic sea views and direct access to a private beach.",
//     image: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     featured: true,
//   },
//   {
//     id: "prop3",
//     title: "Urban Penthouse",
//     location: "Manhattan, New York",
//     price: "12,500,000",
//     bedrooms: 3,
//     bathrooms: 3.5,
//     area: 3200,
//     description:
//       "This exclusive penthouse in the heart of Manhattan offers floor-to-ceiling windows with spectacular city views.",
//     image: "https://images.pexels.com/photos/5186796/pexels-photo-5186796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     featured: true,
//   },
// ]

// export default function FeaturedProperties() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(containerRef, { once: false, amount: 0.3 })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   const nextProperty = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length)
//   }

//   const prevProperty = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProperties.length) % featuredProperties.length)
//   }

//   const currentProperty = featuredProperties[currentIndex]

//   return (
//     <section ref={containerRef} className="py-20 bg-white dark:bg-neutral-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//           }}
//           className="mb-12 text-center"
//         >
//           <h2 className="font-serif text-3xl font-light tracking-tight md:text-5xl mb-4">
//             Featured <span className="font-medium">Properties</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Discover our handpicked selection of the most exceptional properties available in the world's most desirable
//             locations.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             initial="hidden"
//             animate={controls}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
//             }}
//             className="grid gap-8 md:grid-cols-2 lg:gap-12"
//           >
//             {/* Property Image */}
//             <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
//               <Image
//                 src={currentProperty.image || "/placeholder.svg"}
//                 alt={currentProperty.title}
//                 fill
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
//                 <div className="inline-block rounded bg-amber-500/90 px-2 py-1 text-xs font-medium uppercase tracking-wider">
//                   Featured
//                 </div>
//               </div>
//             </div>

//             {/* Property Details */}
//             <div className="flex flex-col justify-center">
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 key={currentProperty.id}
//                 className="space-y-4"
//               >
//                 <h3 className="font-serif text-3xl font-medium">{currentProperty.title}</h3>
//                 <p className="text-neutral-600 dark:text-neutral-400">{currentProperty.location}</p>
//                 <p className="text-2xl font-light">${currentProperty.price}</p>

//                 <div className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
//                   <div>{currentProperty.bedrooms} Bedrooms</div>
//                   <div>{currentProperty.bathrooms} Bathrooms</div>
//                   <div>{currentProperty.area} sq ft</div>
//                 </div>

//                 <p className="text-neutral-600 dark:text-neutral-400">{currentProperty.description}</p>

//                 <div className="pt-4">
//                   <Button
//                     asChild
//                     className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
//                   >
//                     <Link href={`/properties/${currentProperty.id}`}>View Property</Link>
//                   </Button>
//                 </div>
//               </motion.div>

//               {/* Navigation */}
//               <div className="mt-8 flex items-center gap-4">
//                 <button
//                   onClick={prevProperty}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-900"
//                 >
//                   <ArrowLeft className="h-5 w-5" />
//                 </button>
//                 <div className="text-sm text-neutral-600 dark:text-neutral-400">
//                   {currentIndex + 1} / {featuredProperties.length}
//                 </div>
//                 <button
//                   onClick={nextProperty}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-900"
//                 >
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollFloat from "@/components/ui/scroll-float";

const featuredProperties = [
  {
    id: "prop1",
    title: "Alpine Retreat",
    location: "Gstaad, Switzerland",
    price: "9,500,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 4200,
    description:
      "Nestled in the pristine Swiss Alps, this luxury chalet offers breathtaking mountain views and unparalleled privacy.",
    image: "https://images.pexels.com/photos/5923080/pexels-photo-5923080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "prop2",
    title: "Coastal Villa",
    location: "Amalfi Coast, Italy",
    price: "7,800,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 3800,
    description:
      "Perched on the cliffs of the Amalfi Coast, this villa offers panoramic sea views and direct access to a private beach.",
    image: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "prop3",
    title: "Urban Penthouse",
    location: "Manhattan, New York",
    price: "12,500,000",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    description:
      "This exclusive penthouse in the heart of Manhattan offers floor-to-ceiling windows with spectacular city views.",
    image: "https://images.pexels.com/photos/5186796/pexels-photo-5186796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
  };

  const prevProperty = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + featuredProperties.length) % featuredProperties.length
    );
  };

  const currentProperty = featuredProperties[currentIndex];

  // Split Text Animation for Title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={containerRef} className="py-20 bg-[#fffefa] dark:bg-neutral-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          {/* Stats Section */}
          <div className="container mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <ScrollFloat
                containerClassName="text-center flex flex-col items-center justify-center"
                textClassName="text-white dark:text-neutral-600"
                animationDuration={1.2}
                stagger={0.02}
                scrollStart="top bottom+=50%"
                scrollEnd="bottom top-=50%"
              >
                {/* Icon and Text in One Line */}
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="text-[#996830] w-12 h-12 mr-2" />
                  <span className="text-3xl font-bold text-[#2C2C2C] dark:text-[#868384]">100%</span>
                </div>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-[#868384]">SATISFACTION</p>
                <p className="text-xs text-[#2C2C2C] dark:text-[#868384]">CLIENTS</p>
              </ScrollFloat>

              {/* Stat 2 */}
              <ScrollFloat
                containerClassName="text-center flex flex-col items-center justify-center"
                textClassName="text-white dark:text-neutral-600"
                animationDuration={1.2}
                stagger={0.02}
                scrollStart="top bottom+=50%"
                scrollEnd="bottom top-=50%"
              >
                {/* Icon and Text in One Line */}
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="text-[#996830] w-12 h-12 mr-2" />
                  <span className="text-3xl font-bold text-[#2C2C2C] dark:text-[#868384]">100+</span>
                </div>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-[#868384]">LUXURY</p>
                <p className="text-xs text-[#2C2C2C] dark:text-[#868384]">LOCATIONS</p>
              </ScrollFloat>

              {/* Stat 3 */}
              <ScrollFloat
                containerClassName="text-center flex flex-col items-center justify-center"
                textClassName="text-white dark:text-neutral-600"
                animationDuration={1.2}
                stagger={0.02}
                scrollStart="top bottom+=50%"
                scrollEnd="bottom top-=50%"
              >
                {/* Icon and Text in One Line */}
                <div className="flex items-center justify-center mb-2">
                  <Home className="text-[#996830] w-12 h-12 mr-2" />
                  <span className="text-3xl font-bold text-[#2C2C2C] dark:text-[#868384]">3469</span>
                </div>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-[#868384]">PROPERTIES</p>
                <p className="text-xs text-[#2C2C2C] dark:text-[#868384]">LISTED</p>
              </ScrollFloat>
            </div>
          </div>
        </motion.div>

        {/* Section Header with Gradient Text */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
            <motion.span
              className="text-[#996830]"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {"Featured Properties".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400 mb-24">
            Discover our handpicked selection of the most exceptional properties available in the world’s most desirable locations.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
            }}
            className="grid gap-8 md:grid-cols-2 lg:gap-12"
          >
            {/* Property Image with 3D Animation */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.02, rotateX: 3, rotateY: 3 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={currentProperty.image || "/placeholder.svg"}
                alt={currentProperty.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-block rounded bg-amber-500/90 px-2 py-1 text-xs font-medium uppercase tracking-wider">
                  Featured
                </div>
              </motion.div>
            </motion.div>

            {/* Property Details with Smooth Transitions */}
            <motion.div
              className="flex flex-col justify-center"
              key={currentProperty.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h3
                className="font-serif text-3xl font-medium"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                {currentProperty.title.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h3>
              <p className="text-neutral-600 dark:text-neutral-400">{currentProperty.location}</p>
              <p className="text-2xl font-light">${currentProperty.price}</p>

              <div className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                <div>{currentProperty.bedrooms} Bedrooms</div>
                <div>{currentProperty.bathrooms} Bathrooms</div>
                <div>{currentProperty.area} sq ft</div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400">{currentProperty.description}</p>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <Link href={`/properties/${currentProperty.id}`}>View Property</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation with Animated Arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={prevProperty}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-900"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentIndex + 1} / {featuredProperties.length}
            </div>
            <motion.button
              onClick={nextProperty}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-white dark:hover:text-neutral-900"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}