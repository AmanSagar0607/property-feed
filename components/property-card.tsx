"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Bookmark, Share2, Info, MapPin, Bed, Bath, Square } from "lucide-react"
import Link from "next/link"
import type { Property } from "@/types"
import MediaViewer from "@/components/media-viewer"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
  onLike: (id: string) => void
  onSave: (id: string) => void
  isSaved: boolean
  isActive: boolean
  onInView: () => void
  index: number
}

export default function PropertyCard({
  property,
  onLike,
  onSave,
  isSaved,
  isActive,
  onInView,
  index,
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.6, // Adjust this value as needed
    triggerOnce: false,
  });

  // Handle double tap to like
  const [lastTap, setLastTap] = useState(0)
  const handleTap = () => {
    const now = Date.now()
    if (now - lastTap < 300) {
      // Double tap detected
      handleLike()
    }
    setLastTap(now)
  }

  // Handle like with animation
  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 },
      })
      onLike(property.id)
    }
  }

  // Handle save
  const handleSave = () => {
    onSave(property.id)
  }

  // Notify parent when this card is in view
  useEffect(() => {
    if (inView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <motion.div
      ref={cardRef}
      className="property-card mb-12 relative overflow-hidden bg-[#F5F5F5] dark:bg-neutral-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        ref={ref}
        className="relative aspect-[4/3] md:aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-t-2xl"
        onClick={handleTap}
      >
        <MediaViewer media={property.media} isActive={isActive && inView} />

        {/* Property quick info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6  text-white">
          <h2 className="text-2xl font-serif font-medium mb-1">{property.title}</h2>
          <div className="flex items-center gap-1 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.squareFeet} sq ft</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-medium">${property.price.toLocaleString()}</span>
            {property.isPremium && (
              <span className="ml-2 px-2 py-0.5 bg-[#996830] dark:bg-[#996830] text-white text-xs rounded-full">Premium</span>
            )}
          </div>
        </div>

        {/* Like animation overlay */}
        {liked && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={controls} className="text-white">
              <Heart className="w-20 h-20 fill-white" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-neutral-800 max-w-4xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <Heart
              className={cn(
                "w-6 h-6 transition-colors",
                liked ? "fill-red-500 text-red-500" : "text-neutral-600 dark:text-neutral-300",
              )}
            />
          </button>
          <button
            onClick={handleSave}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <Bookmark
              className={cn(
                "w-6 h-6 transition-colors",
                isSaved ? "fill-amber-500 text-amber-500" : "text-neutral-600 dark:text-neutral-300",
              )}
            />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
            <Share2 className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
          </button>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors "
        >
          <Info className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
        </button>
      </div>

      {/* Expanded property details */}
      {showDetails && (
        <motion.div
          className="p-12  mt-2 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 max-w-4xl mx-auto rounded-2xl"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium mb-4">About this property</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">{property.description}</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Features</h4>
              <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                {property.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <div>Year built:</div>
                <div>{property.yearBuilt}</div>
                <div>Property type:</div>
                <div>{property.propertyType}</div>
                <div>Available from:</div>
                <div>{property.availableFrom}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <Link
              href={`/properties/${property.id}`}
              className="flex-1 py-3 bg-neutral-900 text-white text-center rounded-md font-medium hover:bg-neutral-800 transition-colors dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Details
            </Link>
            <Link
              href={`/schedule/${property.id}`}
              className="flex-1 py-3 border border-neutral-300 dark:border-neutral-600 text-center rounded-md font-medium hover:bg-neutral-100 transition-colors dark:hover:bg-neutral-700"
            >
              Schedule a viewing
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

