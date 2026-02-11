"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { ACCENT_BLUE } from "@/data/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { articlesData } from "@/data/articles";

// Desktop: 3 columns, staggered rows with organic offsets
// Mobile: 2 columns, staggered
const cardPositions = {
  desktop: [
    // Row 1
    { left: "4%", top: "40px" },
    { left: "36%", top: "0px" },
    { left: "68%", top: "60px" },
    // Row 2
    { left: "8%", top: "360px" },
    { left: "38%", top: "320px" },
    { left: "65%", top: "380px" },
    // Row 3
    { left: "3%", top: "680px" },
    { left: "35%", top: "640px" },
    { left: "67%", top: "700px" },
    // Row 4
    { left: "7%", top: "1000px" },
    { left: "37%", top: "960px" },
    { left: "66%", top: "1020px" },
    // Row 5
    { left: "4%", top: "1320px" },
    { left: "36%", top: "1280px" },
    { left: "68%", top: "1340px" },
    // Row 6 (1 card centered)
    { left: "35%", top: "1600px" },
  ],
  mobile: [
    // 2 columns staggered
    { left: "4%", top: "20px" },
    { left: "50%", top: "60px" },
    { left: "4%", top: "280px" },
    { left: "50%", top: "320px" },
    { left: "4%", top: "540px" },
    { left: "50%", top: "580px" },
    { left: "4%", top: "800px" },
    { left: "50%", top: "840px" },
    { left: "4%", top: "1060px" },
    { left: "50%", top: "1100px" },
    { left: "4%", top: "1320px" },
    { left: "50%", top: "1360px" },
    { left: "4%", top: "1580px" },
    { left: "50%", top: "1620px" },
    { left: "4%", top: "1840px" },
    { left: "50%", top: "1880px" },
  ],
};

const floatDurations = [55, 65, 48, 72, 60, 50, 68, 58, 62, 52, 70, 45, 56, 64, 47, 63];
const floatDelays = [0, -18, -35, -8, -25, -12, -40, -5, -22, -30, -15, -38, -10, -28, -20, -33];

function generateFloatKeyframes(isMobile: boolean): string {
  const r = isMobile ? 12 : 30;

  const paths = [
    { p1: { x: r * 0.8, y: -r * 0.5 }, p2: { x: r, y: r * 0.3 }, p3: { x: r * 0.2, y: r * 0.8 } },
    { p1: { x: -r * 0.7, y: r * 0.6 }, p2: { x: -r * 0.9, y: -r * 0.3 }, p3: { x: -r * 0.2, y: -r * 0.7 } },
    { p1: { x: r * 0.6, y: r * 0.5 }, p2: { x: -r * 0.4, y: r * 0.3 }, p3: { x: r * 0.8, y: -r * 0.4 } },
    { p1: { x: r * 0.5, y: -r * 0.6 }, p2: { x: -r * 0.5, y: r * 0.4 }, p3: { x: r * 0.3, y: r * 0.6 } },
    { p1: { x: -r * 0.6, y: -r * 0.4 }, p2: { x: r * 0.7, y: r * 0.5 }, p3: { x: -r * 0.3, y: r * 0.7 } },
    { p1: { x: r * 0.9, y: r * 0.2 }, p2: { x: -r * 0.6, y: -r * 0.6 }, p3: { x: r * 0.4, y: -r * 0.5 } },
    { p1: { x: -r * 0.5, y: r * 0.7 }, p2: { x: r * 0.8, y: -r * 0.2 }, p3: { x: -r * 0.7, y: -r * 0.4 } },
    { p1: { x: r * 0.4, y: r * 0.6 }, p2: { x: -r * 0.8, y: r * 0.1 }, p3: { x: r * 0.6, y: -r * 0.3 } },
    { p1: { x: -r * 0.3, y: -r * 0.8 }, p2: { x: r * 0.5, y: r * 0.6 }, p3: { x: -r * 0.6, y: r * 0.2 } },
    { p1: { x: r * 0.7, y: -r * 0.3 }, p2: { x: -r * 0.4, y: -r * 0.5 }, p3: { x: r * 0.2, y: r * 0.7 } },
    { p1: { x: -r * 0.8, y: r * 0.4 }, p2: { x: r * 0.3, y: -r * 0.7 }, p3: { x: -r * 0.5, y: -r * 0.2 } },
    { p1: { x: r * 0.6, y: r * 0.3 }, p2: { x: -r * 0.7, y: r * 0.5 }, p3: { x: r * 0.4, y: -r * 0.6 } },
    { p1: { x: -r * 0.4, y: -r * 0.6 }, p2: { x: r * 0.6, y: r * 0.4 }, p3: { x: -r * 0.8, y: r * 0.3 } },
    { p1: { x: r * 0.7, y: r * 0.5 }, p2: { x: -r * 0.3, y: -r * 0.7 }, p3: { x: r * 0.5, y: -r * 0.2 } },
    { p1: { x: -r * 0.6, y: r * 0.3 }, p2: { x: r * 0.4, y: -r * 0.6 }, p3: { x: -r * 0.2, y: r * 0.8 } },
    { p1: { x: r * 0.3, y: -r * 0.7 }, p2: { x: -r * 0.5, y: r * 0.6 }, p3: { x: r * 0.7, y: r * 0.1 } },
  ];

  return paths
    .map(
      (path, i) => `
    @keyframes float-${i} {
      0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
      25% { transform: translate(${path.p1.x}px, ${path.p1.y}px) rotate(0.4deg); }
      50% { transform: translate(${path.p2.x}px, ${path.p2.y}px) rotate(-0.3deg); }
      75% { transform: translate(${path.p3.x}px, ${path.p3.y}px) rotate(0.3deg); }
    }
  `
    )
    .join("\n");
}

function FloatingCard({
  article,
  index,
  isMobile,
}: {
  article: (typeof articlesData)[0];
  index: number;
  isMobile: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const pos = isMobile
    ? cardPositions.mobile[index]
    : cardPositions.desktop[index];
  const cardWidth = isMobile ? "44%" : "26%";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        left: pos.left,
        top: pos.top,
        width: cardWidth,
        zIndex: isHovered ? 10 : 1,
      }}
    >
      {/* Float animation wrapper */}
      <div
        style={{
          animation: `float-${index} ${floatDurations[index]}s ease-in-out infinite`,
          animationDelay: `${floatDelays[index]}s`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {/* Interactive card */}
        <Link href={`/artigos/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            scale: isHovered ? 1.04 : 1,
            boxShadow: isHovered
              ? "0 0 30px rgba(0, 102, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)"
              : "0 4px 16px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            padding: isMobile ? "16px" : "22px",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${isHovered ? ACCENT_BLUE : "rgba(255, 255, 255, 0.08)"}`,
            borderRadius: "12px",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
        >
          {/* Cover image */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "80px" : "100px",
              borderRadius: "6px",
              overflow: "hidden",
              marginBottom: isMobile ? "10px" : "14px",
            }}
          >
            <img
              src={article.coverImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: ["/images/covers/cover-03.png", "/images/covers/cover-07.png", "/images/covers/cover-11.png", "/images/covers/cover-15.png"].includes(article.coverImage) ? "bottom center" : "center",
                display: "block",
              }}
            />
          </div>

          {/* Header: code + tag */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: isMobile ? "10px" : "14px",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: isMobile ? "10px" : "11px",
                color: ACCENT_BLUE,
                letterSpacing: "1px",
              }}
            >
              {article.code}
            </span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: isMobile ? "8px" : "9px",
                color: "rgba(255, 255, 255, 0.35)",
                letterSpacing: "1.5px",
                padding: "3px 8px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
              }}
            >
              {article.tag}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.5,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: isMobile ? 3 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.title}
          </h3>

          {/* Description - hidden on mobile */}
          {!isMobile && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.4)",
                lineHeight: 1.6,
                margin: 0,
                marginTop: "10px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {article.description}
            </p>
          )}

          {/* Read button - appears on hover */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
              marginTop: isHovered ? 12 : 0,
            }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", display: "flex", justifyContent: "flex-end" }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: ACCENT_BLUE,
                letterSpacing: "1px",
              }}
            >
              LER →
            </span>
          </motion.div>
        </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ArtigosPage() {
  const isMobile = useIsMobile();

  // Calculate container height based on last card position
  const containerHeight = isMobile ? "2100px" : "1900px";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#f5f0e8",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Float keyframes */}
      <style dangerouslySetInnerHTML={{ __html: generateFloatKeyframes(isMobile) }} />

      <Header />

      {/* Subtle grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.025,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Subtle radial glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(0, 102, 255, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          paddingTop: isMobile ? "80px" : "100px",
          paddingLeft: isMobile ? "24px" : "48px",
          paddingBottom: "20px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.35)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          [SYS:ARTICLES]
        </span>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "22px" : "30px",
            fontWeight: 300,
            lineHeight: 1.3,
            color: "#fff",
            margin: 0,
          }}
        >
          Nosso olhar{" "}
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            técnico
          </span>
        </h1>
      </motion.div>

      {/* Floating cards container */}
      <div style={{ position: "relative", height: containerHeight }}>
        {articlesData.map((article, index) => (
          <FloatingCard
            key={article.code}
            article={article}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? "40px 24px 60px" : "40px 48px 80px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#555",
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid #282828",
            borderRadius: "6px",
            transition: "all 0.3s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#666";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#282828";
            e.currentTarget.style.color = "#555";
          }}
        >
          ← VOLTAR
        </Link>
      </motion.div>

      {/* Decorative floating hex codes */}
      {!isMobile && (
        <>
          <motion.span
            animate={{ opacity: [0.04, 0.12, 0.04] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "fixed",
              right: "60px",
              top: "28%",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.08)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            0x41525449
          </motion.span>
          <motion.span
            animate={{ opacity: [0.03, 0.1, 0.03] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{
              position: "fixed",
              left: "40%",
              bottom: "15%",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.08)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            0x48435420
          </motion.span>
          <motion.span
            animate={{ opacity: [0.02, 0.08, 0.02] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
            style={{
              position: "fixed",
              right: "25%",
              bottom: "35%",
              fontFamily: "monospace",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.08)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            0x464C4F41
          </motion.span>
        </>
      )}
    </div>
  );
}
