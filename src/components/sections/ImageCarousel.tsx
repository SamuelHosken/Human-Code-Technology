"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks";

export function ImageCarousel() {
  const isMobile = useIsMobile();
  const images = Array.from({ length: 17 }, (_, i) => `/logos/${i + 1}.webp`);
  const duplicatedImages = [...images, ...images];

  const imageHeight = isMobile ? 80 : 150;
  const imageWidth = isMobile ? 120 : 200;
  const gap = isMobile ? 12 : 20;
  const padding = isMobile ? 32 : 60;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        padding: `${padding}px 0`,
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      {/* Blur overlays - simplified on mobile for performance */}
      {!isMobile && (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "100%",
              zIndex: 15,
              pointerEvents: "none",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              maskImage: "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "30%",
              height: "100%",
              zIndex: 15,
              pointerEvents: "none",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              maskImage: "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 0%, black 20%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* Fade gradient overlays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: isMobile ? "15%" : "25%",
          height: "100%",
          zIndex: 16,
          pointerEvents: "none",
          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: isMobile ? "15%" : "25%",
          height: "100%",
          zIndex: 16,
          pointerEvents: "none",
          background: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
        }}
      />

      {/* Image strip */}
      <motion.div
        animate={{ x: "-50%" }}
        transition={{
          duration: isMobile ? 45 : 65,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          display: "flex",
          gap: `${gap}px`,
          alignItems: "center",
          width: "fit-content",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={isMobile ? undefined : { filter: "grayscale(0%) brightness(1)" }}
            transition={{ duration: 0.3 }}
            style={{
              height: `${imageHeight}px`,
              width: `${imageWidth}px`,
              position: "relative",
              filter: "grayscale(100%) brightness(1.5)",
              flexShrink: 0,
              cursor: isMobile ? "default" : "pointer",
            }}
          >
            <Image
              src={image}
              alt={`Logo ${(index % 17) + 1}`}
              fill
              sizes={`${imageWidth}px`}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
