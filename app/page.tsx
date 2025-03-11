"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import PropertyFeed from "@/components/property-feed"
import Lifestyle from "@/components/lifestyle"
import Services from "@/components/services"
// import Loader from "@/components/loader"
import { Loader } from "lucide-react"
import { useSession } from "next-auth/react"


export default function Home() {
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      // <div className="h-screen w-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      //   <Loader />
      // </div>
      <div className="flex items-center justify-center w-full h-screen">
        <Loader className="h-6 w-6" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
      <Hero />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <FeaturedProperties />
        <Lifestyle />
        <PropertyFeed />
        <Services />
      </motion.div>
    </main>
  )
}

