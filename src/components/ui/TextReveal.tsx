"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TextRevealWord({
  progress,
  range,
  children,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block", marginRight: "0.25em" }}>
      {/* Ghost text for layout */}
      <span style={{ opacity: 0.15 }}>{children}</span>
      {/* Revealed text */}
      <motion.span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function TextReveal({
  children,
  style,
}: {
  children: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = useMemo(() => children.split(" "), [children]);

  return (
    <div ref={containerRef}>
      <p
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: 0,
          ...style,
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <TextRevealWord
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </TextRevealWord>
          );
        })}
      </p>
    </div>
  );
}
