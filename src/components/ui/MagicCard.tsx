"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface MagicCardProps {
  children?: React.ReactNode;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export function MagicCard({
  children,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
  borderRadius = "0px",
  style,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(("clientX" in e ? e.clientX : 0) - left);
        mouseY.set(("clientY" in e ? e.clientY : 0) - top);
      }
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const borderGradient = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      transparent 100%
    )
  `;

  const spotlightGradient = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
  `;

  return (
    <div
      ref={cardRef}
      onMouseEnter={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }}
      style={{
        position: "relative",
        borderRadius,
        ...style,
      }}
    >
      {/* Border gradient layer */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: borderGradient,
          pointerEvents: "none",
        }}
      />
      {/* Background fill */}
      <div
        style={{
          position: "absolute",
          inset: "1px",
          borderRadius: "inherit",
          backgroundColor: "inherit",
        }}
      />
      {/* Spotlight overlay */}
      <motion.div
        animate={{ opacity: isHovered ? gradientOpacity : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: "1px",
          borderRadius: "inherit",
          background: spotlightGradient,
          pointerEvents: "none",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
