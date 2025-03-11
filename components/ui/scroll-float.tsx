import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "power2.out",
  scrollStart = "top bottom+=50%",
  scrollEnd = "bottom top-=50%",
  stagger = 0.02
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;

    // Split text into words and format the first word as bold
    const words = children.split(/\n/);
    return words.map((word, index) => (
      <span key={index} className="inline-block">
        {index === 0 ? (
          <strong className="font-bold">{word.trim()}</strong>
        ) : (
          <span className="text-sm">{word.trim()}</span>
        )}
        {index < words.length - 1 && <br />}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    // Add wavy effect using GSAP
    gsap.fromTo(
      charElements,
      {
        opacity: 0,
        y: (index) => 20 + Math.sin(index * 0.5) * 10, // Sinusoidal wave effect
        scale: 0.9,
        transformOrigin: "50% 50%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2
      ref={containerRef}
      className={`my-4 overflow-hidden ${containerClassName}`}
    >
      <span
        className={`inline-block text-[clamp(1rem,3vw,1.5rem)] leading-tight ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;