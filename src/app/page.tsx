"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Imported components
import { Header, ScrollProgressLine } from "@/components/layout";
import { LiquidGlassFilter, BlinkReveal, LineReveal, FlipText, TriggeredRevealText } from "@/components/ui";
import { ImageCarousel } from "@/components/sections";
import { ACCENT_BLUE, containerStyle, heroContainerStyle, servicesData, techData, heroGridData, GridCellData } from "@/data";
import { useIsMobile } from "@/hooks";

// ===========================================
// GRID SYSTEM - Terminal Style
// ===========================================

// Hero Title with line-by-line reveal
function HeroTitleReveal({ delay = 0 }: { delay?: number }) {
  return (
    <h1
      style={{
        fontSize: "clamp(28px, 4.5vw, 44px)",
        fontWeight: 300,
        lineHeight: 1.15,
        marginBottom: "24px",
      }}
    >
      <LineReveal delay={delay}>
        <span style={{ fontWeight: 500 }}>Soluções</span> tecnológicas
      </LineReveal>{" "}
      <LineReveal delay={delay + 100}>
        <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>sob medida</span>
      </LineReveal>{" "}
      <LineReveal delay={delay + 200}>
        <span style={{ fontWeight: 300 }}>para empresas que</span>
      </LineReveal>{" "}
      <LineReveal delay={delay + 300}>
        <span style={{ fontWeight: 500 }}>precisam de eficiência real</span>
      </LineReveal>
    </h1>
  );
}



// Article Card with hover effect
function ArticleCard({
  code,
  title,
  tag,
  index,
}: {
  code: string;
  title: string;
  tag: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [initPhase, setInitPhase] = useState(0);
  // Use index for deterministic stagger instead of random to avoid hydration mismatch
  const staggerDelay = 200 + index * 100;

  useEffect(() => {
    const timer1 = setTimeout(() => setInitPhase(1), staggerDelay);
    const timer2 = setTimeout(() => setInitPhase(2), staggerDelay + 150);
    const timer3 = setTimeout(() => setInitPhase(3), staggerDelay + 300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [staggerDelay]);

  const getBackgroundColor = () => {
    if (isHovered) return "#111";
    if (initPhase === 1) return "#0a1a2e";
    if (initPhase === 2) return "#1a1610";
    return "#0a0a0a";
  };

  return (
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ backgroundColor: getBackgroundColor() }}
      transition={{ duration: 0.1 }}
      style={{
        padding: "28px",
        borderBottom: "1px solid #1a1a1a",
        borderRight: "1px solid #1a1a1a",
        cursor: "pointer",
        backgroundColor: "#000",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <motion.span
          animate={{
            color: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : initPhase >= 2 ? "#fff" : "#222",
          }}
          transition={{ duration: 0.1 }}
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
          }}
        >
          {code}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: "monospace", fontSize: "9px", color: "#777", padding: "4px 8px", border: "1px solid #1a1a1a" }}
        >
          {tag}
        </motion.span>
      </div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: "15px",
          fontWeight: 500,
          marginBottom: "16px",
          color: "#f5f0e8",
          lineHeight: 1.4,
        }}
      >
        {title}
      </motion.h3>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <motion.div
          animate={{
            opacity: initPhase === 0 ? 0 : isHovered ? 1 : initPhase === 3 ? [0.3, 1, 0.3] : 1,
            backgroundColor: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : "#fff",
          }}
          transition={{
            opacity: initPhase === 3 && !isHovered
              ? { duration: 2, repeat: Infinity, delay: index * 0.2 }
              : { duration: 0.1 },
            backgroundColor: { duration: 0.1 },
          }}
          style={{ width: "5px", height: "5px" }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: isHovered ? ACCENT_BLUE : "#fff",
          }}
        >
          LER →
        </motion.span>
      </div>
    </motion.article>
  );
}

// Service Card with hover effect
function ServiceCard({
  code,
  title,
  description,
  index,
}: {
  code: string;
  title: string;
  description: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [initPhase, setInitPhase] = useState(0);
  // Use index for deterministic stagger instead of random to avoid hydration mismatch
  const staggerDelay = 200 + index * 100;

  useEffect(() => {
    const timer1 = setTimeout(() => setInitPhase(1), staggerDelay);
    const timer2 = setTimeout(() => setInitPhase(2), staggerDelay + 150);
    const timer3 = setTimeout(() => setInitPhase(3), staggerDelay + 300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [staggerDelay]);

  const getBackgroundColor = () => {
    if (isHovered) return "#111";
    if (initPhase === 1) return "#0a1a2e";
    if (initPhase === 2) return "#1a1610";
    return "#0a0a0a";
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ backgroundColor: getBackgroundColor() }}
      transition={{ duration: 0.1 }}
      style={{
        padding: "28px",
        borderBottom: "1px solid #1a1a1a",
        borderRight: "1px solid #1a1a1a",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <motion.span
          animate={{
            color: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : initPhase >= 2 ? "#fff" : "#222",
          }}
          transition={{ duration: 0.1 }}
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            fontWeight: 400,
          }}
        >
          {code}
        </motion.span>
        <motion.div
          animate={{
            opacity: initPhase === 0 ? 0 : isHovered ? 1 : initPhase === 3 ? [0.3, 1, 0.3] : 1,
            backgroundColor: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : "#fff",
          }}
          transition={{
            opacity: initPhase === 3 && !isHovered
              ? { duration: 2, repeat: Infinity, delay: index * 0.2 }
              : { duration: 0.1 },
            backgroundColor: { duration: 0.1 },
          }}
          style={{
            width: "5px",
            height: "5px",
          }}
        />
      </div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: "15px",
          fontWeight: 400,
          marginBottom: "10px",
          color: "#f5f0e8",
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ fontSize: "13px", lineHeight: 1.6, color: "#888" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

// Services Section with Full-Width Sticky Glass Panel
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // Map scroll progress to service index (0-7) with smoother thresholds
      const progress = Math.max(0, Math.min(1, v));
      const index = Math.min(Math.floor(progress * servicesData.length), servicesData.length - 1);
      if (index !== currentIndex && index >= 0) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex(index);
          setIsTransitioning(false);
        }, 50);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentIndex]);

  const currentService = servicesData[currentIndex];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      style={{
        backgroundColor: "#000",
        position: "relative",
        // Reduced height for faster card switching
        height: `${servicesData.length * 35}vh`,
      }}
    >
      {/* Background scrolling content for glass effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "15vh 0",
        }}
      >
        {servicesData.map((service, i) => (
          <div
            key={service.code}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.15,
              padding: "40px",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(60px, 12vw, 140px)",
                fontWeight: 300,
                color: "#fff",
                letterSpacing: "-2px",
              }}
            >
              {service.code}
            </span>
          </div>
        ))}
      </div>

      {/* Sticky Glass Panel - Full Width */}
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1252px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: "relative",
              padding: "48px 56px",
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "60px",
              minHeight: "200px",
            }}
          >
            {/* Liquid Glass Effect Layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                filter: "url(#glass-distortion)",
                overflow: "hidden",
                borderRadius: "24px",
              }}
            />

            {/* Tint Layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "rgba(0, 0, 0, 0.55)",
                borderRadius: "24px",
              }}
            />

            {/* Shine Layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                overflow: "hidden",
                borderRadius: "24px",
                boxShadow: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.12), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            />

            {/* Left Content - Fixed Title */}
            <div style={{ position: "relative", zIndex: 3, flex: "0 0 320px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:SERVICES]
              </span>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "0",
                }}
              >
                Nossas <span style={{ fontWeight: 500 }}>frentes</span> de{" "}
                <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>
                  atuação
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                width: "1px",
                height: "100px",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Right Content - Changing Service Info */}
            <div style={{ position: "relative", zIndex: 3, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <motion.span
                  key={currentService.code}
                  initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: ACCENT_BLUE,
                    letterSpacing: "1px",
                  }}
                >
                  {currentService.code}
                </motion.span>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: ACCENT_BLUE,
                  }}
                />
              </div>

              <motion.h3
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 400,
                  marginBottom: "12px",
                  color: "#fff",
                }}
              >
                {currentService.title}
              </motion.h3>

              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "500px",
                }}
              >
                {currentService.description}
              </motion.p>

              {/* Progress Indicator */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginTop: "24px",
                }}
              >
                {servicesData.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: i === currentIndex ? ACCENT_BLUE : "rgba(255,255,255,0.15)",
                      width: i === currentIndex ? "28px" : "6px",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                      height: "4px",
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Mobile Services Section - Horizontal Swipeable Carousel
function MobileServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < servicesData.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section
      id="servicos"
      style={{
        backgroundColor: "#000",
        padding: "60px 0",
      }}
    >
      {/* Header */}
      <div style={{ padding: "0 16px", marginBottom: "24px" }}>
        <span
          style={{
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "10px",
            fontWeight: 500,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          [SYS:SERVICES]
        </span>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: 1.2,
          }}
        >
          Nossas <span style={{ fontWeight: 500 }}>frentes</span> de{" "}
          <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>
            atuação
          </span>
        </h2>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: "12px",
          padding: "0 16px",
        }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={service.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              flex: "0 0 calc(100% - 32px)",
              scrollSnapAlign: "center",
              padding: "24px",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #1a1a1a",
              borderRadius: "16px",
            }}
          >
            {/* Service Code */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: ACCENT_BLUE,
                  letterSpacing: "1px",
                }}
              >
                {service.code}
              </span>
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  backgroundColor: ACCENT_BLUE,
                }}
              />
            </div>

            {/* Service Title */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 500,
                marginBottom: "8px",
                color: "#fff",
              }}
            >
              {service.title}
            </h3>

            {/* Service Description */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          marginTop: "20px",
        }}
      >
        {servicesData.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              backgroundColor: i === currentIndex ? ACCENT_BLUE : "rgba(255,255,255,0.15)",
              width: i === currentIndex ? "20px" : "6px",
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: "4px",
              borderRadius: "2px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// Generic Grid Cell with hover effect
function GridCellWithHover({
  code,
  label,
  index = 0,
  showIndicator = true,
}: {
  code: string;
  label: string;
  index?: number;
  showIndicator?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [initPhase, setInitPhase] = useState(0);
  // Use index for deterministic stagger instead of random to avoid hydration mismatch
  const staggerDelay = 200 + index * 50;

  useEffect(() => {
    const timer1 = setTimeout(() => setInitPhase(1), staggerDelay);
    const timer2 = setTimeout(() => setInitPhase(2), staggerDelay + 150);
    const timer3 = setTimeout(() => setInitPhase(3), staggerDelay + 300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [staggerDelay]);

  const getBackgroundColor = () => {
    if (isHovered) return "#111";
    if (initPhase === 1) return "#0a1a2e";
    if (initPhase === 2) return "#1a1610";
    return "#000";
  };

  const getCodeColor = () => {
    if (isHovered) return ACCENT_BLUE;
    if (initPhase === 1) return ACCENT_BLUE;
    if (initPhase >= 2) return "#fff";
    return "#222";
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ backgroundColor: getBackgroundColor() }}
      transition={{ duration: 0.1 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 20px",
        borderBottom: "1px solid #1a1a1a",
        backgroundColor: "#000",
        cursor: "default",
      }}
    >
      <motion.span
        animate={{ color: getCodeColor() }}
        transition={{ duration: 0.1 }}
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
        }}
      >
        {code}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "monospace",
          fontSize: "12px",
          color: "#e5e5e5",
          textTransform: "uppercase",
        }}
      >
        {label}
      </motion.span>
      {showIndicator && (
        <motion.div
          animate={{
            opacity: initPhase === 0 ? 0 : isHovered ? 1 : initPhase === 3 ? [0.3, 1, 0.3] : 1,
            backgroundColor: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : "#fff",
          }}
          transition={{
            opacity: initPhase === 3 && !isHovered
              ? { duration: 2, repeat: Infinity, delay: index * 0.3 }
              : { duration: 0.1 },
            backgroundColor: { duration: 0.1 },
          }}
          style={{
            width: "5px",
            height: "5px",
          }}
        />
      )}
    </motion.div>
  );
}

// Hero Grid Cell with hover effect and init animation
function HeroGridCell({ item, cellIndex, randomDelay }: { item: { code: string; label: string }; cellIndex: number; randomDelay: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [initPhase, setInitPhase] = useState(0); // 0: waiting, 1: blue blink, 2: beige blink, 3: done

  // Some cells will have blue indicators (only a few)
  const isBlueCell = cellIndex === 3 || cellIndex === 12 || cellIndex === 27;

  useEffect(() => {
    // Start blue blink
    const timer1 = setTimeout(() => {
      setInitPhase(1);
    }, randomDelay);

    // Start beige blink
    const timer2 = setTimeout(() => {
      setInitPhase(2);
    }, randomDelay + 150);

    // Done
    const timer3 = setTimeout(() => {
      setInitPhase(3);
    }, randomDelay + 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [randomDelay]);

  const getBackgroundColor = () => {
    if (isHovered) return "#111";
    if (initPhase === 1) return "#0a1a2e";
    if (initPhase === 2) return "#1a1610";
    return "#000";
  };

  const getCodeColor = () => {
    if (isHovered) return ACCENT_BLUE;
    if (initPhase === 1) return ACCENT_BLUE;
    if (initPhase >= 2) return isBlueCell ? ACCENT_BLUE : "#fff";
    return "#222";
  };

  const getIndicatorColor = () => {
    if (isHovered) return ACCENT_BLUE;
    if (initPhase === 1) return ACCENT_BLUE;
    if (initPhase >= 2) return isBlueCell ? ACCENT_BLUE : "#fff";
    return "#222";
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ backgroundColor: getBackgroundColor() }}
      transition={{ duration: 0.1 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        padding: "12px 14px",
        borderBottom: "1px solid #1a1a1a",
        borderRight: "1px solid #1a1a1a",
        backgroundColor: "#000",
        minWidth: "130px",
        cursor: "default",
      }}
    >
      <motion.span
        animate={{ color: getCodeColor() }}
        transition={{ duration: 0.1 }}
        style={{
          fontFamily: "monospace",
          fontSize: "8px",
          fontWeight: 400,
        }}
      >
        {item.code}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: initPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          fontWeight: 500,
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.3px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          flex: 1,
          textAlign: "right",
        }}
      >
        {item.label}
      </motion.span>
      <motion.div
        animate={{
          opacity: initPhase === 0 ? 0 : isHovered ? 1 : initPhase === 3 ? [0.2, 0.8, 0.2] : 1,
          backgroundColor: getIndicatorColor(),
        }}
        transition={{
          opacity: initPhase === 3 && !isHovered
            ? { duration: 1.5, repeat: Infinity, delay: cellIndex * 0.05 }
            : { duration: 0.1 },
          backgroundColor: { duration: 0.1 },
        }}
        style={{
          width: "4px",
          height: "4px",
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

// Hero Grid Component with Status Indicators
function HeroGrid() {
  const contentCells = 40; // 4 columns x 10 rows with content
  const columns = 4;

  // Initialize with deterministic values to avoid hydration mismatch
  const [cellIndices, setCellIndices] = useState(() =>
    Array.from({ length: contentCells }, (_, i) => i % heroGridData.length)
  );

  const [randomDelays, setRandomDelays] = useState(() =>
    Array.from({ length: contentCells }, (_, i) => 200 + (i * 20))
  );

  // Randomize initial values and start random cell updates on client
  useEffect(() => {
    // Randomize initial indices
    setCellIndices(Array.from({ length: contentCells }, () => Math.floor(Math.random() * heroGridData.length)));
    setRandomDelays(Array.from({ length: contentCells }, () => Math.random() * 800 + 200));

    // Update 1-3 random cells every 400-800ms
    const interval = setInterval(() => {
      setCellIndices(prev => {
        const newIndices = [...prev];
        // Pick 1-3 random cells to update
        const numToUpdate = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numToUpdate; i++) {
          const cellIndex = Math.floor(Math.random() * contentCells);
          newIndices[cellIndex] = Math.floor(Math.random() * heroGridData.length);
        }
        return newIndices;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const indices = cellIndices;

  const cellStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    padding: "12px 14px",
    borderBottom: "1px solid #1a1a1a",
    borderRight: "1px solid #1a1a1a",
    backgroundColor: "#000",
    minWidth: "130px",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 130px)`,
        gridAutoRows: "auto",
        border: "1px solid #1a1a1a",
        borderRight: "none",
        borderBottom: "none",
        backgroundColor: "#000",
        flexShrink: 0,
      }}
    >
      {/* Empty row at top */}
      {Array.from({ length: columns }).map((_, i) => (
        <div key={`top-${i}`} style={cellStyle} />
      ))}

      {/* Content cells */}
      {indices.map((dataIndex, cellIndex) => {
        const item = heroGridData[dataIndex];
        return (
          <HeroGridCell
            key={cellIndex}
            item={item}
            cellIndex={cellIndex}
            randomDelay={randomDelays[cellIndex]}
          />
        );
      })}

      {/* Empty row at bottom */}
      {Array.from({ length: columns }).map((_, i) => (
        <div key={`bottom-${i}`} style={cellStyle} />
      ))}
    </div>
  );
}

// Mobile Hero Section - Redesigned for impact
function MobileHeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Staggered reveal phases
    const timers = [
      setTimeout(() => setPhase(1), 200),   // Status indicator
      setTimeout(() => setPhase(2), 500),   // Title line 1
      setTimeout(() => setPhase(3), 700),   // Title line 2
      setTimeout(() => setPhase(4), 900),   // Title line 3
      setTimeout(() => setPhase(5), 1100),  // Description
      setTimeout(() => setPhase(6), 1400),  // CTA
      setTimeout(() => setPhase(7), 1700),  // Decorative elements
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 20px 40px",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Background decorative grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Floating code snippets - decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 7 ? 0.08 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          fontFamily: "monospace",
          fontSize: "8px",
          color: "#fff",
          transform: "rotate(12deg)",
        }}
      >
        {"<init/>"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 7 ? 0.06 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: "absolute",
          bottom: "25%",
          left: "8%",
          fontFamily: "monospace",
          fontSize: "8px",
          color: ACCENT_BLUE,
          transform: "rotate(-8deg)",
        }}
      >
        {"0x7F"}
      </motion.div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Status indicator - larger and centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: phase >= 1 ? 1 : 0,
            scale: phase >= 1 ? 1 : 0.8
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <motion.div
            animate={{
              opacity: phase >= 1 ? [0.4, 1, 0.4] : 0,
              boxShadow: phase >= 1 ? [
                `0 0 10px ${ACCENT_BLUE}`,
                `0 0 25px ${ACCENT_BLUE}`,
                `0 0 10px ${ACCENT_BLUE}`
              ] : "none"
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: ACCENT_BLUE,
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#666",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            SYSTEM ONLINE
          </span>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#fff",
            }}
          >
            _
          </motion.div>
        </motion.div>

        {/* Title - dramatic reveal */}
        <div style={{ marginBottom: "32px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "32px",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Soluções</span> tecnológicas
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "32px",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              sob medida
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            para quem precisa de{" "}
            <span style={{ color: ACCENT_BLUE }}>eficiência real</span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: phase >= 5 ? 1 : 0, y: phase >= 5 ? 0 : 15 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#888",
            marginBottom: "40px",
            maxWidth: "320px",
          }}
        >
          Automação completa, pensada do zero para os processos que movem o{" "}
          <span style={{ color: "#ccc", fontWeight: 400 }}>seu negócio</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 6 ? 1 : 0, y: phase >= 6 ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 28px",
            backgroundColor: "#fff",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: 500,
            textDecoration: "none",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          <span>Ver serviços</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>

        {/* Terminal-style info box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 7 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: "48px",
            padding: "16px",
            border: "1px solid #1a1a1a",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#333" }} />
            <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#444", letterSpacing: "2px" }}>
              STATUS
            </span>
          </div>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#555", lineHeight: 1.8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#666" }}>&gt; clientes_ativos</span>
              <span style={{ color: "#888" }}>OK</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#666" }}>&gt; projetos_2024</span>
              <span style={{ color: "#888" }}>12+</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#666" }}>&gt; disponibilidade</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: ACCENT_BLUE }}
              >
                OPEN
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 7 ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: "#333",
          }}
        />
        <span style={{ fontFamily: "monospace", fontSize: "8px", color: "#333", letterSpacing: "2px" }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}

// Mobile Hero Grid - simplified 2-column version
function MobileHeroGrid() {
  const contentCells = 8; // 2 columns x 4 rows
  const columns = 2;

  // Initialize with deterministic values to avoid hydration mismatch
  const [cellIndices, setCellIndices] = useState(() =>
    Array.from({ length: contentCells }, (_, i) => i % heroGridData.length)
  );

  // Randomize and start random cell updates on client
  useEffect(() => {
    setCellIndices(Array.from({ length: contentCells }, () => Math.floor(Math.random() * heroGridData.length)));

    // Update 1 random cell every 800ms
    const interval = setInterval(() => {
      setCellIndices(prev => {
        const newIndices = [...prev];
        const cellIndex = Math.floor(Math.random() * contentCells);
        newIndices[cellIndex] = Math.floor(Math.random() * heroGridData.length);
        return newIndices;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const indices = cellIndices;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        border: "1px solid #1a1a1a",
        borderRight: "none",
        borderBottom: "none",
        backgroundColor: "#000",
        width: "100%",
      }}
    >
      {indices.map((dataIndex, cellIndex) => {
        const item = heroGridData[dataIndex];
        return (
          <motion.div
            key={cellIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: cellIndex * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
              padding: "10px 12px",
              borderBottom: "1px solid #1a1a1a",
              borderRight: "1px solid #1a1a1a",
              backgroundColor: "#000",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                fontWeight: 400,
                color: "#666",
              }}
            >
              {item.code}
            </span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                fontWeight: 500,
                color: "#e5e5e5",
                textAlign: "right",
              }}
            >
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

// Tech Section Grid
// Tech Grid Cell with hover and scroll reveal
function TechGridCell({
  item,
  isRevealed,
  revealDelay
}: {
  item: { code: string; label: string };
  isRevealed: boolean;
  revealDelay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [initPhase, setInitPhase] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed && !hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealed(true);
        // Start color animation sequence after reveal
        setTimeout(() => setInitPhase(1), 50);
        setTimeout(() => setInitPhase(2), 200);
        setTimeout(() => setInitPhase(3), 350);
      }, revealDelay);
      return () => clearTimeout(timer);
    }
  }, [isRevealed, hasRevealed, revealDelay]);

  const getBackgroundColor = () => {
    if (!hasRevealed) return "#000";
    if (isHovered) return "#111";
    if (initPhase === 1) return "#0a1a2e";
    if (initPhase === 2) return "#1a1610";
    return "#000";
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: getBackgroundColor(),
        opacity: hasRevealed ? 1 : 0,
        scale: hasRevealed ? 1 : 0.8,
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "6px",
        padding: "12px 14px",
        borderBottom: "1px solid #1a1a1a",
        borderRight: "1px solid #1a1a1a",
        cursor: "default",
      }}
    >
      {/* Code + Indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <motion.span
          animate={{
            color: hasRevealed
              ? (isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : initPhase >= 2 ? "#555" : "#222")
              : "#000",
          }}
          transition={{ duration: 0.15 }}
          style={{
            fontFamily: "monospace",
            fontSize: "9px",
            fontWeight: 400,
          }}
        >
          {item.code}
        </motion.span>
        {/* Indicator dot */}
        <motion.div
          animate={{
            opacity: hasRevealed ? (isHovered ? 1 : initPhase === 3 ? [0.3, 1, 0.3] : initPhase >= 1 ? 1 : 0) : 0,
            backgroundColor: isHovered ? ACCENT_BLUE : initPhase === 1 ? ACCENT_BLUE : "#fff",
          }}
          transition={{
            opacity: initPhase === 3 && !isHovered
              ? { duration: 2, repeat: Infinity }
              : { duration: 0.15 },
            backgroundColor: { duration: 0.15 },
          }}
          style={{
            width: "4px",
            height: "4px",
          }}
        />
      </div>
      <motion.span
        key={item.label}
        animate={{
          opacity: hasRevealed && initPhase >= 2 ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          fontWeight: 500,
          color: "#e5e5e5",
          textAlign: "right",
        }}
      >
        {item.label}
      </motion.span>
    </motion.div>
  );
}

function TechGrid() {
  const isMobile = useIsMobile();
  const columns = isMobile ? 3 : 8;
  const rows = isMobile ? 8 : 14;
  const gridCells = columns * rows; // 24 cells on mobile, 112 on desktop
  const gridRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Initialize with deterministic values to avoid hydration mismatch
  const [cellIndices, setCellIndices] = useState(() =>
    Array.from({ length: 112 }, (_, i) => i % techData.length)
  );

  const [revealDelays, setRevealDelays] = useState(() =>
    Array.from({ length: 112 }, (_, i) => i * 10)
  );

  // Randomize on client only after hydration
  useEffect(() => {
    setCellIndices(Array.from({ length: gridCells }, () => Math.floor(Math.random() * techData.length)));
    setRevealDelays(Array.from({ length: gridCells }, () => Math.random() * 1500));
  }, [gridCells]);

  // Detect when grid comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Random cell updates - start after reveal animation
  useEffect(() => {
    if (!isInView) return;

    let interval: ReturnType<typeof setInterval>;

    // Wait for reveal animation to complete before starting random updates
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setCellIndices(prev => {
          const newIndices = [...prev];
          // Update 2-5 random cells each interval
          const numToUpdate = Math.floor(Math.random() * 4) + 2;
          for (let i = 0; i < numToUpdate; i++) {
            const cellIndex = Math.floor(Math.random() * gridCells);
            newIndices[cellIndex] = Math.floor(Math.random() * techData.length);
          }
          return newIndices;
        });
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, [isInView, gridCells]);

  const indices = cellIndices;

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        border: "1px solid #1a1a1a",
        borderRight: "none",
        borderBottom: "none",
        backgroundColor: "#000",
      }}
    >
      {indices.map((dataIndex, cellIndex) => {
        const item = techData[dataIndex];
        return (
          <TechGridCell
            key={cellIndex}
            item={item}
            isRevealed={isInView}
            revealDelay={revealDelays[cellIndex]}
          />
        );
      })}
    </div>
  );
}

// Mobile Tech Section - Categorized horizontal scrolls
function MobileTechSection() {
  const categories = [
    { id: "ai", name: "IA & Modelos", prefix: "AI", color: ACCENT_BLUE },
    { id: "ml", name: "Machine Learning", prefix: "ML", color: "#8b5cf6" },
    { id: "lng", name: "Linguagens", prefix: "LNG", color: "#10b981" },
    { id: "frm", name: "Frameworks", prefix: "FRM", color: "#f59e0b" },
    { id: "aut", name: "Automação", prefix: "AUT", color: "#ec4899" },
    { id: "cld", name: "Cloud & Infra", prefix: "CLD", color: "#06b6d4" },
    { id: "db", name: "Databases", prefix: "DB", color: "#84cc16" },
    { id: "api", name: "APIs", prefix: "API", color: "#f97316" },
  ];

  const getTechsByCategory = (prefix: string) => {
    return techData.filter(t => t.code.startsWith(prefix));
  };

  return (
    <section style={{ backgroundColor: "#000", padding: "60px 0" }}>
      {/* Header */}
      <div style={{ padding: "0 20px", marginBottom: "32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 500,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            [SYS:MODELS]
          </span>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            <span style={{ fontWeight: 500 }}>Tecnologias</span> que{" "}
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>
              dominamos
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Categories with horizontal scroll */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {categories.map((category, catIndex) => {
          const techs = getTechsByCategory(category.prefix);
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.05 }}
            >
              {/* Category header */}
              <div
                style={{
                  padding: "0 20px",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: category.color,
                    opacity: 0.8,
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "#888",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {category.name}
                </span>
              </div>

              {/* Horizontal scroll container */}
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    paddingBottom: "4px",
                  }}
                >
                  {techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.code}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.03 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flexShrink: 0,
                        padding: "12px 16px",
                        backgroundColor: "#0a0a0a",
                        border: "1px solid #1a1a1a",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        minWidth: "100px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: "9px",
                          color: category.color,
                          opacity: 0.7,
                        }}
                      >
                        {tech.code}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#e5e5e5",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tech.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          margin: "32px 20px 0",
          padding: "16px",
          border: "1px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "block", fontFamily: "monospace", fontSize: "20px", color: ACCENT_BLUE, fontWeight: 500 }}>
            80+
          </span>
          <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#555", letterSpacing: "1px" }}>
            TECNOLOGIAS
          </span>
        </div>
        <div style={{ width: "1px", backgroundColor: "#1a1a1a" }} />
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "block", fontFamily: "monospace", fontSize: "20px", color: "#fff", fontWeight: 500 }}>
            8
          </span>
          <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#555", letterSpacing: "1px" }}>
            CATEGORIAS
          </span>
        </div>
        <div style={{ width: "1px", backgroundColor: "#1a1a1a" }} />
        <div style={{ textAlign: "center" }}>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ display: "block", fontFamily: "monospace", fontSize: "20px", color: "#10b981", fontWeight: 500 }}
          >
            ●
          </motion.span>
          <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#555", letterSpacing: "1px" }}>
            ATUALIZADO
          </span>
        </div>
      </motion.div>
    </section>
  );
}

// Mobile Methodology Section - Timeline design
function MobileMethodologySection() {
  const steps = [
    {
      phase: "01",
      title: "Diagnóstico",
      description: "Mapeamento completo de processos, sistemas e gargalos existentes.",
      icon: "◉"
    },
    {
      phase: "02",
      title: "Arquitetura",
      description: "Desenho técnico da solução com definição de tecnologias e integrações.",
      icon: "◎"
    },
    {
      phase: "03",
      title: "Execução",
      description: "Desenvolvimento iterativo com validações constantes e ajustes em tempo real.",
      icon: "○"
    },
    {
      phase: "04",
      title: "Operação",
      description: "Implantação assistida, treinamento e suporte estratégico contínuo.",
      icon: "●"
    },
  ];

  return (
    <section id="metodologia" style={{ padding: "60px 0", backgroundColor: "#000" }}>
      <div style={{ padding: "0 20px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "40px" }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 500,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            [SYS:METHOD]
          </span>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Como <span style={{ fontWeight: 500 }}>operamos</span>
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#666", fontWeight: 300 }}>
            Metodologia estruturada para entregas consistentes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "19px",
              top: "20px",
              bottom: "20px",
              width: "1px",
              backgroundColor: "#1a1a1a",
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: "relative",
                paddingLeft: "50px",
                paddingBottom: index === steps.length - 1 ? "0" : "32px",
              }}
            >
              {/* Phase number circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  border: "1px solid #333",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: ACCENT_BLUE,
                  }}
                >
                  {step.phase}
                </span>
              </motion.div>

              {/* Content card */}
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #1a1a1a",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#f5f0e8",
                    }}
                  >
                    {step.title}
                  </h3>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: index === 0 ? ACCENT_BLUE : "#fff",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#666",
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: "32px",
            padding: "16px",
            border: "1px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <motion.div
            animate={{
              backgroundColor: [ACCENT_BLUE, "#fff", ACCENT_BLUE],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              width: "6px",
              height: "6px",
            }}
          />
          <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#555", letterSpacing: "2px" }}>
            CICLO CONTÍNUO
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// Mobile About Section - Linear layout without scroll-pinning
function MobileAboutSection() {
  const [revealed, setRevealed] = useState(false);
  const [gridPhases, setGridPhases] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger reveal when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          // Trigger grid animations with staggered delays
          [0, 1, 2, 3].forEach((i) => {
            const delay = i * 150 + 400;
            setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 1; return n; }), delay);
            setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 2; return n; }), delay + 120);
            setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 3; return n; }), delay + 240);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [revealed]);

  const gridItems = [
    { code: "001", label: "Automação Corporativa" },
    { code: "002", label: "Inteligência Artificial" },
    { code: "003", label: "Engenharia de Processos" },
    { code: "004", label: "Execução Técnica" },
  ];

  const getGridCellBg = (p: number) => {
    if (p === 1) return "#0a1a2e";
    if (p === 2) return "#1a1610";
    return "#0a0a0a";
  };

  const getGridCellColor = (p: number) => {
    if (p === 1) return ACCENT_BLUE;
    if (p >= 2) return "#fff";
    return "#222";
  };

  return (
    <section
      ref={sectionRef}
      id="quem-somos"
      style={{
        padding: "80px 16px",
        backgroundColor: "#000",
      }}
    >
      {/* Tag */}
      <motion.span
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 10 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        style={{
          display: "inline-block",
          fontFamily: "monospace",
          fontSize: "10px",
          fontWeight: 500,
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "16px",
        }}
      >
        [SYS:ABOUT]
      </motion.span>

      {/* Title */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 200,
          lineHeight: 1.3,
          marginBottom: "24px",
        }}
      >
        <TriggeredRevealText active={revealed} delay={0}>
          O que é a&nbsp;
        </TriggeredRevealText>
        <TriggeredRevealText active={revealed} delay={80}>
          <span style={{ fontWeight: 600, color: "#fff" }}>
            Human Code
          </span>
        </TriggeredRevealText>
        <TriggeredRevealText active={revealed} delay={160}>
          &nbsp;?
        </TriggeredRevealText>
      </h2>

      {/* Description */}
      <motion.div
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 15 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginBottom: "32px" }}
      >
        <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
          A <span style={{ color: "#ccc", fontWeight: 400 }}>Human Code Technology</span> (HCT) é uma empresa especializada em <span style={{ color: "#ccc", fontWeight: 400 }}>automação corporativa</span> sob medida. Atuamos com organizações que buscam reestruturar seus processos com <span style={{ color: "#ccc", fontWeight: 400 }}>profundidade, inteligência</span> e foco em <span style={{ color: "#ccc", fontWeight: 400 }}>resultados reais</span>.
        </p>
      </motion.div>

      {/* Info Grid */}
      <motion.div
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          border: "1px solid #1a1a1a",
          borderBottom: "none",
          marginBottom: "32px",
        }}
      >
        {gridItems.map((item, index) => (
          <motion.div
            key={item.code}
            animate={{ backgroundColor: getGridCellBg(gridPhases[index]) }}
            transition={{ duration: 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderBottom: "1px solid #1a1a1a",
              backgroundColor: "#000",
            }}
          >
            <motion.span
              animate={{ color: getGridCellColor(gridPhases[index]) }}
              transition={{ duration: 0.1 }}
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
              }}
            >
              {item.code}
            </motion.span>
            <motion.span
              animate={{ opacity: gridPhases[index] >= 2 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#e5e5e5",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </motion.span>
            <motion.div
              animate={{
                opacity: gridPhases[index] === 0 ? 0 : gridPhases[index] === 3 ? [0.3, 1, 0.3] : 1,
                backgroundColor: getGridCellColor(gridPhases[index]),
              }}
              transition={{
                opacity: gridPhases[index] === 3
                  ? { duration: 2, repeat: Infinity, delay: index * 0.3 }
                  : { duration: 0.1 },
                backgroundColor: { duration: 0.1 },
              }}
              style={{
                width: "5px",
                height: "5px",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 15 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          padding: "20px",
          borderLeft: "2px solid #fff",
          backgroundColor: "#000",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#f5f0e8",
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontStyle: "italic",
          }}
        >
          "Somos uma empresa séria, técnica e extremamente comprometida com resultado."
        </p>
      </motion.div>
    </section>
  );
}

// Scroll-pinned About Section
function ScrollPinnedAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phase state - controls which elements are visible
  // 1: title big (starts here), 2: title small + tag, 3: description, 4: grid, 5: quote
  const [phase, setPhase] = useState(1); // Start with title visible
  const [gridPhases, setGridPhases] = useState([0, 0, 0, 0]);
  const [titleRevealed, setTitleRevealed] = useState(false);

  // Trigger title reveal animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !titleRevealed) {
          setTimeout(() => setTitleRevealed(true), 100);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [titleRevealed]);

  // Thresholds for each phase
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.1) {
        setPhase(1);
      } else if (v >= 0.1 && v < 0.2) {
        setPhase(2);
      } else if (v >= 0.2 && v < 0.32) {
        setPhase(3);
      } else if (v >= 0.32 && v < 0.45) {
        setPhase(4);
      } else if (v >= 0.45) {
        setPhase(5);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Trigger grid animations when phase reaches 4
  const [gridTriggered, setGridTriggered] = useState(false);
  useEffect(() => {
    if (phase >= 4 && !gridTriggered) {
      setGridTriggered(true);
      [0, 1, 2, 3].forEach((i) => {
        const delay = Math.random() * 250 + 50;
        setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 1; return n; }), delay);
        setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 2; return n; }), delay + 120);
        setTimeout(() => setGridPhases(prev => { const n = [...prev]; n[i] = 3; return n; }), delay + 240);
      });
    } else if (phase < 4 && gridTriggered) {
      setGridTriggered(false);
      setGridPhases([0, 0, 0, 0]);
    }
  }, [phase, gridTriggered]);

  const gridItems = [
    { code: "001", label: "Automação Corporativa" },
    { code: "002", label: "Inteligência Artificial" },
    { code: "003", label: "Engenharia de Processos" },
    { code: "004", label: "Execução Técnica" },
  ];

  const getGridCellBg = (p: number) => {
    if (p === 1) return "#0a1a2e";
    if (p === 2) return "#1a1610";
    return "#0a0a0a";
  };

  const getGridCellColor = (p: number) => {
    if (p === 1) return ACCENT_BLUE;
    if (p >= 2) return "#fff";
    return "#222";
  };

  // Filler opacity based on scroll - stays visible longer
  const fillerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="quem-somos"
      style={{
        height: "350vh",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Minimal decorative elements */}
        <motion.div
          style={{
            opacity: fillerOpacity,
            position: "absolute",
            top: "35%",
            left: "4%",
            width: "1px",
            height: "80px",
            backgroundColor: "#1a1a1a",
          }}
        />
        <motion.div
          style={{
            opacity: fillerOpacity,
            position: "absolute",
            top: "30%",
            right: "4%",
            width: "1px",
            height: "80px",
            backgroundColor: "#1a1a1a",
          }}
        />
        <motion.div
          style={{
            opacity: fillerOpacity,
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "monospace",
            fontSize: "9px",
            color: "#444",
            letterSpacing: "4px",
          }}
        >
          ↓
        </motion.div>

        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          {/* Phase 1: Title big and centered */}
          <motion.div
            animate={{
              opacity: phase === 1 ? 1 : 0,
              pointerEvents: phase === 1 ? "auto" : "none",
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: "32%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 200,
                lineHeight: 1.2,
              }}
            >
              <TriggeredRevealText active={titleRevealed} delay={0}>
                O que é a&nbsp;
              </TriggeredRevealText>
              <TriggeredRevealText active={titleRevealed} delay={100}>
                <span style={{ fontWeight: 600, color: "#fff" }}>
                  Human Code
                </span>
              </TriggeredRevealText>
              <TriggeredRevealText active={titleRevealed} delay={200}>
                &nbsp;?
              </TriggeredRevealText>
            </h2>
          </motion.div>

          {/* Phase 2+: Normal layout */}
          <motion.div
            animate={{
              opacity: phase >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Left - Header */}
            <div>
              {/* Tag */}
              <motion.span
                animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:ABOUT]
              </motion.span>

              {/* Title */}
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 200,
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                <TriggeredRevealText active={phase >= 2} delay={0}>
                  O que é a&nbsp;
                </TriggeredRevealText>
                <TriggeredRevealText active={phase >= 2} delay={80}>
                  <span style={{ fontWeight: 600, color: "#fff" }}>
                    Human Code
                  </span>
                </TriggeredRevealText>
                <TriggeredRevealText active={phase >= 2} delay={160}>
                  &nbsp;?
                </TriggeredRevealText>
              </h2>

              {/* Description */}
              <motion.div
                animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
                  A <span style={{ color: "#ccc", fontWeight: 400 }}>Human Code Technology</span> (HCT) é uma empresa especializada em <span style={{ color: "#ccc", fontWeight: 400 }}>automação corporativa</span> sob medida. Atuamos com organizações que buscam reestruturar seus processos com <span style={{ color: "#ccc", fontWeight: 400 }}>profundidade, inteligência</span> e foco em <span style={{ color: "#ccc", fontWeight: 400 }}>resultados reais</span>.
                </p>
              </motion.div>
            </div>

            {/* Right - Info Grid */}
            <motion.div
              animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                border: "1px solid #1a1a1a",
                borderBottom: "none",
                marginTop: "40px",
              }}
            >
              {gridItems.map((item, index) => (
                <motion.div
                  key={item.code}
                  animate={{ backgroundColor: getGridCellBg(gridPhases[index]) }}
                  transition={{ duration: 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 20px",
                    borderBottom: "1px solid #1a1a1a",
                    backgroundColor: "#000",
                    cursor: "default",
                  }}
                >
                  <motion.span
                    animate={{ color: getGridCellColor(gridPhases[index]) }}
                    transition={{ duration: 0.1 }}
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                    }}
                  >
                    {item.code}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: gridPhases[index] >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "monospace",
                      fontSize: "12px",
                      color: "#e5e5e5",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    animate={{
                      opacity: gridPhases[index] === 0 ? 0 : gridPhases[index] === 3 ? [0.3, 1, 0.3] : 1,
                      backgroundColor: getGridCellColor(gridPhases[index]),
                    }}
                    transition={{
                      opacity: gridPhases[index] === 3
                        ? { duration: 2, repeat: Infinity, delay: index * 0.3 }
                        : { duration: 0.1 },
                      backgroundColor: { duration: 0.1 },
                    }}
                    style={{
                      width: "5px",
                      height: "5px",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            animate={{ opacity: phase >= 5 ? 1 : 0, y: phase >= 5 ? 0 : 15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              marginTop: "60px",
              padding: "24px",
              borderLeft: "2px solid #fff",
              backgroundColor: "#000",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#f5f0e8",
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              "Somos uma empresa séria, técnica e extremamente comprometida com resultado."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const isMobile = useIsMobile();

  // Responsive container styles
  const responsiveHeroContainer = {
    ...heroContainerStyle,
    paddingLeft: isMobile ? "16px" : "24px",
    paddingRight: isMobile ? "16px" : "24px",
  };

  const responsiveContainer = {
    ...containerStyle,
    paddingLeft: isMobile ? "16px" : "40px",
    paddingRight: isMobile ? "16px" : "40px",
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#f5f0e8", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Scroll Progress Line - hide on mobile */}
      {!isMobile && <ScrollProgressLine />}

      {/* Hero */}
      {isMobile ? (
        <MobileHeroSection />
      ) : (
        <section
          id="home"
          style={{
            position: "relative",
            paddingTop: "180px",
            paddingBottom: "100px",
            overflow: "hidden",
          }}
        >
          <div style={responsiveHeroContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Left Content */}
              <div style={{ flex: "1 1 auto", maxWidth: "600px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {/* Badge */}
                <BlinkReveal delay={200}>
                  <div style={{ marginBottom: "24px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        backgroundColor: "transparent",
                        border: "1px solid #1a1a1a",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#fff",
                        }}
                      />
                      SYS:ACTIVE
                    </span>
                  </div>
                </BlinkReveal>

                {/* Title */}
                <HeroTitleReveal delay={350} />

                {/* Description - line by line blink */}
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#888",
                    maxWidth: "480px",
                    fontWeight: 300,
                  }}
                >
                  <BlinkReveal delay={500}>
                    <span style={{ display: "block" }}><span style={{ color: "#ccc", fontWeight: 400 }}>Automação completa</span>, pensada do zero para os processos</span>
                  </BlinkReveal>
                  <BlinkReveal delay={600}>
                    <span style={{ display: "block" }}>que movem o <span style={{ color: "#ccc", fontWeight: 400 }}>seu negócio</span>.</span>
                  </BlinkReveal>
                  <BlinkReveal delay={700}>
                    <span style={{ display: "block" }}>Não entregamos atalhos. Entregamos <span style={{ color: "#ccc", fontWeight: 400 }}>profundidade</span>.</span>
                  </BlinkReveal>
                </div>
              </div>

              {/* Right Grid */}
              <HeroGrid />
            </div>
          </div>
        </section>
      )}

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Transition Section between Hero and About */}
      <section
        style={{
          position: "relative",
          height: isMobile ? "150px" : "250px",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* Binary/Hex codes floating - reduced on mobile */}
        {!isMobile && ["0x4A", "1010", "0xFF", "0011", "0x7B", "1101"].map((code, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.05, 0.25, 0.05]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              top: `${30 + (i % 3) * 25}%`,
              left: `${8 + i * 14}%`,
              fontFamily: "monospace",
              fontSize: "10px",
              color: i === 2 ? ACCENT_BLUE : "#1a1a1a",
              letterSpacing: "2px",
            }}
          >
            {code}
          </motion.div>
        ))}

        {/* Center terminal element */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Terminal box */}
          <motion.div
            animate={{ borderColor: ["#1a1a1a", "#252525", "#1a1a1a"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              padding: "8px 16px",
              border: "1px solid #1a1a1a",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: ACCENT_BLUE,
                boxShadow: `0 0 10px ${ACCENT_BLUE}`,
              }}
            />
            <span style={{ fontFamily: "monospace", fontSize: "9px", color: "#888", letterSpacing: "2px" }}>
              SYS:ABOUT
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ fontFamily: "monospace", fontSize: "10px", color: "#fff" }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Animated arrow */}
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div style={{ width: "1px", height: "20px", backgroundColor: "#1a1a1a" }} />
            <div style={{
              width: "8px",
              height: "8px",
              borderRight: "1px solid #1a1a1a",
              borderBottom: "1px solid #1a1a1a",
              transform: "rotate(45deg)",
              marginTop: "-4px"
            }} />
          </motion.div>
        </div>

        {/* Side decorative lines */}
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "1px",
            height: "60%",
            backgroundColor: "#1a1a1a",
            transformOrigin: "top",
          }}
        />
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "1px",
            height: "60%",
            backgroundColor: "#1a1a1a",
            transformOrigin: "top",
          }}
        />

        {/* Corner decorations */}
        <div style={{ position: "absolute", top: "20px", left: "20px", fontFamily: "monospace", fontSize: "8px", color: "#151515" }}>
          ┌──
        </div>
        <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "monospace", fontSize: "8px", color: "#151515" }}>
          ──┐
        </div>
        <div style={{ position: "absolute", bottom: "20px", left: "20px", fontFamily: "monospace", fontSize: "8px", color: "#151515" }}>
          └──
        </div>
        <div style={{ position: "absolute", bottom: "20px", right: "20px", fontFamily: "monospace", fontSize: "8px", color: "#151515" }}>
          ──┘
        </div>
      </section>

      {/* Quem Somos */}
      {isMobile ? <MobileAboutSection /> : <ScrollPinnedAbout />}

      {/* Blur transition */}
      <div
        style={{
          height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Serviços */}
      {isMobile ? <MobileServicesSection /> : <ServicesSection />}

      {/* Números - White Section */}
      <section style={{ padding: isMobile ? "60px 0" : "120px 0", backgroundColor: "#fff" }}>
        <div style={responsiveContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: 500,
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              [SYS:METRICS]
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#000",
              }}
            >
              Resultados que <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>falam</span>
            </h2>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: "1px",
              backgroundColor: "#e5e5e5",
              border: "1px solid #e5e5e5",
            }}
          >
            {[
              { value: "150+", label: "Processos automatizados" },
              { value: "40%", label: "Redução média de custos operacionais" },
              { value: "98%", label: "Taxa de satisfação dos clientes" },
              { value: "24/7", label: "Monitoramento e suporte técnico" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  backgroundColor: "#fff",
                  padding: isMobile ? "24px 16px" : "40px 24px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: isMobile ? "28px" : "clamp(32px, 5vw, 48px)",
                    fontWeight: 500,
                    color: "#000",
                    marginBottom: "12px",
                    fontFamily: "monospace",
                  }}
                >
                  {metric.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Para Quem - White Section */}
      <section style={{ padding: isMobile ? "60px 0" : "120px 0", backgroundColor: "#f8f8f8" }}>
        <div style={responsiveContainer}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr", gap: isMobile ? "32px" : "80px", alignItems: "start" }}>
            {/* Left - Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#000",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:AUDIENCE]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#000",
                  marginBottom: "24px",
                }}
              >
                Para <span style={{ fontWeight: 500 }}>quem</span> <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>atuamos</span>
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#666", fontWeight: 300 }}>
                Trabalhamos com <span style={{ color: "#000", fontWeight: 400 }}>empresas que entendem</span> que tecnologia não é custo — é <span style={{ color: "#000", fontWeight: 400 }}>infraestrutura estratégica</span>.
              </p>
            </motion.div>

            {/* Right - Industries Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1px",
                backgroundColor: "#e0e0e0",
                border: "1px solid #e0e0e0",
              }}
            >
              {[
                { code: "IND-01", name: "Indústria", detail: "Manufatura, logística e supply chain" },
                { code: "IND-02", name: "Serviços Financeiros", detail: "Bancos, fintechs e gestoras" },
                { code: "IND-03", name: "Saúde", detail: "Hospitais, clínicas e healthtechs" },
                { code: "IND-04", name: "Varejo", detail: "E-commerce e redes de lojas" },
                { code: "IND-05", name: "Energia", detail: "Utilities e renováveis" },
                { code: "IND-06", name: "Educação", detail: "Instituições e edtechs" },
              ].map((industry, index) => (
                <div
                  key={industry.code}
                  style={{
                    backgroundColor: "#f8f8f8",
                    padding: isMobile ? "16px" : "24px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "monospace",
                      fontSize: "9px",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    {industry.code}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                      marginBottom: "4px",
                    }}
                  >
                    {industry.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      fontWeight: 300,
                    }}
                  >
                    {industry.detail}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div style={{ width: "40px", height: "1px", backgroundColor: "#ccc" }} />
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#999", letterSpacing: "2px" }}>
              EMPRESAS DE MÉDIO E GRANDE PORTE
            </span>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#ccc" }} />
          </motion.div>
        </div>
      </section>

      {/* Visão */}
      <section id="visao" style={{ padding: isMobile ? "60px 0" : "120px 0", backgroundColor: "#000" }}>
        <div style={responsiveContainer}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "40px" }}>
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:VISION]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "32px",
                }}
              >
                Empresas <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", color: "#fff" }}>eficientes</span> <span style={{ fontWeight: 500 }}>não nascem prontas.</span>
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#888", fontWeight: 300, marginBottom: "20px" }}>
                Acreditamos que toda empresa, mais cedo ou mais tarde, será forçada a se adaptar à <span style={{ color: "#ccc", fontWeight: 400 }}>nova realidade</span> da automação inteligente.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
                Nossa missão é entregar <span style={{ color: "#ccc", fontWeight: 400 }}>automação de verdade</span>, que respeita o negócio e gera <span style={{ color: "#ccc", fontWeight: 400 }}>retorno concreto</span>.
              </p>
            </motion.div>

            {/* Right - Terminal Output Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                border: "1px solid #1a1a1a",
                backgroundColor: "#000",
                padding: isMobile ? "16px" : "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: "6px", height: "6px", backgroundColor: "#fff" }}
                />
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#888", textTransform: "uppercase" }}>
                  mission.log
                </span>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "12px", lineHeight: 2, color: "#888" }}>
                <div><span style={{ color: "#fff" }}>&gt;</span> consistência</div>
                <div><span style={{ color: "#fff" }}>&gt;</span> estratégia</div>
                <div><span style={{ color: "#fff" }}>&gt;</span> sofisticação</div>
                <div><span style={{ color: "#fff" }}>&gt;</span> profundidade</div>
                <div><span style={{ color: "#fff" }}>&gt;</span> eficiência</div>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ color: "#f5f0e8" }}
                >
                  <span style={{ color: "#fff" }}>&gt;</span> _
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      {isMobile ? (
        <MobileMethodologySection />
      ) : (
        <section id="metodologia" style={{ padding: "120px 0", backgroundColor: "#000" }}>
          <div style={responsiveContainer}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "60px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:METHOD]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Como <span style={{ fontWeight: 500 }}>operamos</span>
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#888", fontWeight: 300, maxWidth: "600px" }}>
                Cada projeto segue uma <span style={{ color: "#ccc", fontWeight: 400 }}>metodologia estruturada</span>, desenvolvida para garantir entregas consistentes e alinhadas às necessidades reais do negócio.
              </p>
            </motion.div>

            {/* Methodology Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #1a1a1a",
              }}
            >
              {[
                { phase: "01", title: "Diagnóstico", description: "Mapeamento completo de processos, sistemas e gargalos existentes." },
                { phase: "02", title: "Arquitetura", description: "Desenho técnico da solução com definição de tecnologias e integrações." },
                { phase: "03", title: "Execução", description: "Desenvolvimento iterativo com validações constantes e ajustes em tempo real." },
                { phase: "04", title: "Operação", description: "Implantação assistida, treinamento e suporte estratégico contínuo." },
              ].map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    backgroundColor: "#000",
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "24px",
                        fontWeight: 300,
                        color: "#333",
                      }}
                    >
                      {step.phase}
                    </span>
                    <div style={{ flex: 1, height: "1px", backgroundColor: "#1a1a1a" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#f5f0e8",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#666",
                      fontWeight: 300,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Blur divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#1a1a1a",
          margin: "0 auto",
          maxWidth: "1200px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: 0,
            right: 0,
            height: "60px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Compromisso */}
      <section id="compromisso" style={{ padding: isMobile ? "60px 0" : "120px 0", backgroundColor: "#000" }}>
        <div style={responsiveContainer}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "80px", alignItems: "start" }}>
            {/* Left - Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:COMMITMENT]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Nosso <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", color: "#fff" }}>compromisso</span>
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#888", fontWeight: 300 }}>
                Trabalhamos com <span style={{ color: "#ccc", fontWeight: 400 }}>transparência absoluta</span> e responsabilidade técnica. Cada decisão é documentada, cada entrega é mensurável.
              </p>
            </motion.div>

            {/* Right - Principles Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                border: "1px solid #1a1a1a",
                borderBottom: "none",
              }}
            >
              {[
                { code: "PRC-01", principle: "Sem dependência tecnológica", detail: "Você mantém controle total sobre seus sistemas e dados." },
                { code: "PRC-02", principle: "Documentação completa", detail: "Cada projeto entregue com manuais técnicos e operacionais." },
                { code: "PRC-03", principle: "Resultados mensuráveis", detail: "KPIs definidos no início, acompanhados até o final." },
                { code: "PRC-04", principle: "Suporte contínuo", detail: "Acompanhamento pós-implantação com ajustes e otimizações." },
              ].map((item, index) => (
                <div
                  key={item.code}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: isMobile ? "12px" : "16px",
                    padding: isMobile ? "16px" : "20px 24px",
                    borderBottom: "1px solid #1a1a1a",
                    backgroundColor: "#000",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "9px",
                      color: "#444",
                      marginTop: "4px",
                    }}
                  >
                    {item.code}
                  </span>
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#f5f0e8",
                        marginBottom: "4px",
                      }}
                    >
                      {item.principle}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        fontWeight: 300,
                      }}
                    >
                      {item.detail}
                    </span>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      width: "4px",
                      height: "4px",
                      backgroundColor: "#fff",
                      marginTop: "8px",
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop: "80px",
              padding: "32px",
              border: "1px solid #1a1a1a",
              backgroundColor: "#000",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: 300,
                color: "#888",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              "Não vendemos promessas. <span style={{ color: "#f5f0e8", fontWeight: 500 }}>Entregamos infraestrutura</span> que funciona, escala e <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", color: "#fff" }}>gera valor</span> desde o primeiro dia."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blur divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#1a1a1a",
          margin: "0 auto",
          maxWidth: "1200px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: 0,
            right: 0,
            height: "60px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Tecnologias - Terminal Grid Style - Full Screen */}
      {isMobile ? (
        <MobileTechSection />
      ) : (
        <section style={{ backgroundColor: "#000", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ padding: "60px 24px 40px", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:MODELS]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#f5f0e8",
                }}
              >
                <span style={{ fontWeight: 500 }}>Modelos</span> e <span style={{ fontWeight: 500 }}>tecnologias</span> que <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", color: "#fff" }}>dominamos</span>
              </h2>
            </motion.div>
          </div>

          {/* Full Width Grid - No padding, fills remaining space */}
          <div style={{ flex: 1 }}>
            <TechGrid />
          </div>
        </section>
      )}

      {/* Artigos Preview */}
      <section id="artigos" style={{ padding: isMobile ? "16px 0 60px" : "16px 0 120px", backgroundColor: "#000" }}>
        <div style={responsiveContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "48px" }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: 500,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              [SYS:ARTICLES]
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Nosso <span style={{ fontWeight: 500 }}>olhar</span> <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", color: "#fff" }}>técnico</span>
            </h2>
          </motion.div>

          {/* Articles Grid - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              border: "1px solid #1a1a1a",
              borderRight: "none",
              borderBottom: "none",
            }}
          >
            {[
              { code: "ART-01", title: "Por que as empresas precisam de IA agente agora", tag: "AGENTIC AI" },
              { code: "ART-02", title: "O impacto real da automação no desempenho financeiro", tag: "FINANCE" },
              { code: "ART-03", title: "Como CEOs tomam decisões tecnológicas", tag: "STRATEGY" },
              { code: "ART-04", title: "A corrida trilionária da IA nos próximos 5 anos", tag: "MARKET" },
            ].map((article, index) => (
              <ArticleCard
                key={article.code}
                code={article.code}
                title={article.title}
                tag={article.tag}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contato - White Section */}
      <section id="contato" style={{ padding: isMobile ? "60px 0" : "120px 0", backgroundColor: "#fff" }}>
        <div style={responsiveContainer}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "60px", alignItems: isMobile ? "start" : "center" }}>
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#000",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                [SYS:CONTACT]
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "24px",
                  color: "#000",
                }}
              >
                Vamos <span style={{ fontWeight: 500 }}>construir</span> algo <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>juntos</span>.
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#666", fontWeight: 300 }}>
                Entre em contato para discutir como podemos <span style={{ color: "#000", fontWeight: 400 }}>transformar seus processos</span> com automação inteligente.
              </p>
            </motion.div>

            {/* Right - Contact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                border: "1px solid #e0e0e0",
                borderBottom: "none",
              }}
            >
              <motion.a
                href="mailto:contato@humancode.com"
                whileHover={{ backgroundColor: "#f5f5f5" }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: isMobile ? "16px" : "20px 24px",
                  borderBottom: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "9px" : "10px", color: "#000" }}>EMAIL</span>
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "11px" : "13px", color: "#333" }}>contato@humancode.com</span>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "5px", height: "5px", backgroundColor: "#000" }}
                />
              </motion.a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: isMobile ? "16px" : "20px 24px",
                  borderBottom: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "9px" : "10px", color: "#000" }}>LOCAL</span>
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "10px" : "11px", color: "#666" }}>Brasília, DF</span>
                <div style={{ width: "5px", height: "5px", backgroundColor: "#ccc" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: isMobile ? "16px" : "20px 24px",
                  borderBottom: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "9px" : "10px", color: "#000" }}>STATUS</span>
                <span style={{ fontFamily: "monospace", fontSize: isMobile ? "10px" : "11px", color: "#666" }}>DISPONÍVEL</span>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: "5px", height: "5px", backgroundColor: "#000" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - White */}
      <footer style={{ padding: isMobile ? "20px 0" : "24px 0", borderTop: "1px solid #e0e0e0", backgroundColor: "#fff" }}>
        <div style={responsiveContainer}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Image
              src="/logo.svg"
              alt="Human Code Technology"
              width={isMobile ? 100 : 120}
              height={isMobile ? 15 : 18}
              style={{ filter: "invert(1)" }}
            />
            {!isMobile && (
              <div style={{ display: "flex", gap: "24px" }}>
                {[
                  { href: "#quem-somos", label: "ABOUT" },
                  { href: "#servicos", label: "SERVICES" },
                  { href: "#artigos", label: "ARTICLES" },
                  { href: "#contato", label: "CONTACT" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ color: "#000" }}
                    transition={{ duration: 0.2 }}
                    style={{ fontFamily: "monospace", fontSize: "10px", color: "#888", textDecoration: "none", letterSpacing: "1px" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            )}
            <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#888" }}>
              © 2025 HCT
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
