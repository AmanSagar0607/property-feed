"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Media } from "@/types"

interface MediaViewerProps {
  media: Media[]
  isActive: boolean
}

export default function MediaViewer({ media, isActive }: MediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentMedia = media[currentIndex]

  // Handle video playback based on active state
  useEffect(() => {
    if (!videoRef.current) return

    if (isActive && currentMedia.type === "video" && isPlaying) {
      videoRef.current.play().catch((err) => console.error("Video play failed:", err))
    } else {
      videoRef.current.pause()
    }
  }, [isActive, currentMedia, isPlaying])

  // Navigate to next media
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Navigate to previous media
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Toggle video playback
  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentMedia.type === "video") {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative w-full h-full">
      {currentMedia.type === "image" ? (
        <Image
          src={currentMedia.url || "/placeholder.svg"}
          alt={currentMedia.alt || "Property image"}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 800px"
          priority={currentIndex === 0}
        />
      ) : (
        <div className="relative w-full h-full">
          <video ref={videoRef} src={currentMedia.url} className="w-full h-full object-cover" loop muted playsInline />
          {currentMedia.type === "video" && (
            <button
              onClick={togglePlayback}
              className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          )}
        </div>
      )}

      {/* Navigation controls */}
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white",
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100",
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === media.length - 1}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white",
              currentIndex === media.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100",
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Media indicator dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {media.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === currentIndex ? "bg-white w-4" : "bg-white/50",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

