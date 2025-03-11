"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropertyCard from "@/components/property-card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchProperties } from "@/lib/api";
import type { Property } from "@/types";
import { Loader } from "lucide-react";
import SplitText from "@/components/split-text";

// Define the cubic bezier values for easeOutCubic
const EASE_OUT_CUBIC: number[] = [0.33, 1, 0.68, 1];

export default function PropertyFeed() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedProperties, setSavedProperties] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const feedRef = useRef<HTMLDivElement>(null);

  // Load initial properties
  useEffect(() => {
    const loadInitialProperties = async () => {
      try {
        const initialProperties = await fetchProperties(1);
        setProperties(initialProperties);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load properties:", error);
        setLoading(false);
      }
    };

    // Load saved properties from localStorage
    const saved = localStorage.getItem("savedProperties");
    if (saved) {
      setSavedProperties(JSON.parse(saved));
    }

    loadInitialProperties();
  }, []);

  // Handle infinite scroll
  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const newProperties = await fetchProperties(nextPage);

      if (newProperties.length === 0) {
        setHasMore(false);
      } else {
        setProperties((prev) => [...prev, ...newProperties]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Failed to load more properties:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  // Set up intersection observer for infinite scroll
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !loading) {
      handleLoadMore();
    }
  }, [inView, loading, handleLoadMore]);

  // Handle like property
  const handleLikeProperty = (propertyId: string) => {
    console.log(`Liked property: ${propertyId}`);
  };

  // Handle save property
  const handleSaveProperty = (propertyId: string) => {
    setSavedProperties((prev) => {
      const isAlreadySaved = prev.includes(propertyId);
      const updated = isAlreadySaved
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId];

      // Save to localStorage
      localStorage.setItem("savedProperties", JSON.stringify(updated));
      return updated;
    });
  };

  // Track current property in view
  const updateCurrentProperty = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 pt-40 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {/* Animated heading */}
          <h2 className="font-serif text-3xl md:text-5xl mb-4 relative">
            <SplitText
              text="Discover Our "
              className="inline-block text-[#996830] dark:text-[#996830] font-light tracking-tight"
              animationFrom={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
              delay={30}
              easing={EASE_OUT_CUBIC}
            />
            <SplitText
              text="Properties"
              className="inline-block text-[#996830] dark:text-[#996830] font-medium tracking-tight"
              animationFrom={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
              delay={30}
              easing={EASE_OUT_CUBIC}
            />
          </h2>

          <p className="mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
            Browse our curated selection of luxury properties available for rent or purchase.
          </p>
        </motion.div>

        <div className="property-feed max-w-screen-xl mx-auto" ref={feedRef}>
          <div className="py-4">
            <AnimatePresence initial={false}>
              {properties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onLike={handleLikeProperty}
                  onSave={handleSaveProperty}
                  isSaved={savedProperties.includes(property.id)}
                  isActive={index === currentIndex}
                  onInView={() => updateCurrentProperty(index)}
                  index={index}
                />
              ))}
            </AnimatePresence>

            {/* Load more trigger */}
            <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
              {loading && (
                <div className="flex items-center justify-center">
                  <Loader className="h-6 w-6 animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}