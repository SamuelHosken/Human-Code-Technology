"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", name: "HOME", threshold: 0 },
  { id: "quem-somos", name: "ABOUT", threshold: 0.08 },
  { id: "servicos", name: "SERVICES", threshold: 0.18 },
  { id: "numeros", name: "METRICS", threshold: 0.28 },
  { id: "visao", name: "VISION", threshold: 0.38 },
  { id: "metodologia", name: "METHOD", threshold: 0.48 },
  { id: "compromisso", name: "COMMITMENT", threshold: 0.55 },
  { id: "tech", name: "TECH", threshold: 0.62 },
  { id: "artigos", name: "ARTICLES", threshold: 0.72 },
  { id: "contato", name: "CONTACT", threshold: 0.85 },
];

export function ScrollProgressLine() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  const [currentSection, setCurrentSection] = useState("HOME");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setPercentage(Math.round(v * 100));

      for (let i = sections.length - 1; i >= 0; i--) {
        if (v >= sections[i].threshold) {
          setCurrentSection(sections[i].name);
          break;
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const lineHeight = useTransform(scrollYProgress, [0.05, 0.98], ["0vh", "100vh"]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: "80px",
        width: "80px",
        height: "100vh",
        zIndex: 100,
        pointerEvents: "none",
        mixBlendMode: "difference",
      }}
    >
      {/* Progress line */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "0.5px",
          height: lineHeight,
          backgroundColor: "#fff",
        }}
      />

      {/* Square indicator */}
      <motion.div
        style={{
          position: "absolute",
          top: lineHeight,
          right: 0,
          transform: "translate(50%, -50%)",
          width: "5px",
          height: "5px",
          backgroundColor: "#fff",
        }}
      />

      {/* Section name and percentage */}
      <motion.div
        animate={{ opacity: percentage >= 98 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: lineHeight,
          right: "14px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "2px",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "8px",
            color: "#fff",
            letterSpacing: "1px",
            opacity: 0.7,
          }}
        >
          {currentSection}
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "9px",
            color: "#fff",
            letterSpacing: "0.5px",
          }}
        >
          {percentage}%
        </span>
      </motion.div>
    </div>
  );
}
