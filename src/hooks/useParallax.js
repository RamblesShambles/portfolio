import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Returns scroll-linked transforms for continuous parallax.
 * `speed` controls how fast the element moves relative to scroll.
 * Negative speed = moves opposite to scroll.
 */
export function useParallax(speed = 0.3, range = ["start end", "end start"]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: range,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.96, 1, 1, 0.96]);

  return { ref, y, opacity, scale, scrollYProgress };
}

/**
 * Staggered children animation driven by scroll.
 */
export function useStaggerParallax(count, baseSpeed = 0.2) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const items = Array.from({ length: count }, (_, i) => {
    const speed = baseSpeed + i * 0.06;
    return {
      y: useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80]),
      opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.2, 1, 1, 0.2]),
    };
  });

  return { ref, items };
}
