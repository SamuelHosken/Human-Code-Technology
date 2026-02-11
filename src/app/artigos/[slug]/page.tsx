"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ACCENT_BLUE } from "@/data/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { articlesData, type ContentBlock } from "@/data/articles";

// ── Reading Progress Bar ──────────────────────────────
function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: ACCENT_BLUE,
        transformOrigin: "left",
        scaleX: scrollYProgress,
        zIndex: 100,
      }}
    />
  );
}

// ── Animated Block Wrapper ────────────────────────────
function AnimatedBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Content Block Renderer ────────────────────────────
function ContentRenderer({
  block,
  isMobile,
}: {
  block: ContentBlock;
  isMobile: boolean;
}) {
  switch (block.type) {
    case "text": {
      const paragraphs = block.content.split("\n\n");
      return (
        <AnimatedBlock>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: 1.85,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: i < paragraphs.length - 1 ? "20px" : "28px",
              }}
            >
              {p}
            </p>
          ))}
        </AnimatedBlock>
      );
    }

    case "heading":
      return (
        <AnimatedBlock>
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: isMobile ? "12px" : "13px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.5)",
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginTop: "56px",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ color: ACCENT_BLUE }}>{">"}</span>
            {block.content}
          </h2>
        </AnimatedBlock>
      );

    case "quote":
      return (
        <AnimatedBlock>
          <blockquote
            style={{
              borderLeft: `2px solid ${ACCENT_BLUE}`,
              paddingLeft: isMobile ? "20px" : "28px",
              marginLeft: 0,
              marginRight: 0,
              marginTop: "40px",
              marginBottom: "40px",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: isMobile ? "18px" : "21px",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: 300,
              }}
            >
              &ldquo;{block.content}&rdquo;
            </p>
            {block.author && (
              <cite
                style={{
                  display: "block",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.35)",
                  letterSpacing: "1px",
                  marginTop: "12px",
                  fontStyle: "normal",
                }}
              >
                — {block.author}
              </cite>
            )}
          </blockquote>
        </AnimatedBlock>
      );

    case "highlight":
      return (
        <AnimatedBlock>
          <div
            style={{
              background: "rgba(0, 102, 255, 0.05)",
              borderLeft: `3px solid ${ACCENT_BLUE}`,
              padding: isMobile ? "20px" : "24px",
              borderRadius: "0 8px 8px 0",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "14px" : "15px",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {block.content}
            </p>
          </div>
        </AnimatedBlock>
      );

    case "terminal":
      return (
        <AnimatedBlock>
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid #1a1a1a",
              borderRadius: "8px",
              overflow: "hidden",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                padding: "10px 16px",
                borderBottom: "1px solid #1a1a1a",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: ACCENT_BLUE,
                }}
              >
                {">"}
              </span>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "rgba(255, 255, 255, 0.25)",
                  letterSpacing: "1px",
                }}
              >
                _
              </span>
            </div>
            {/* Terminal content */}
            <div style={{ padding: isMobile ? "16px" : "20px" }}>
              {block.lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    fontFamily: "monospace",
                    fontSize: isMobile ? "11px" : "13px",
                    lineHeight: 2,
                    color: "rgba(255, 255, 255, 0.6)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedBlock>
      );

    case "list":
      return (
        <AnimatedBlock>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "28px 0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {block.items.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: ACCENT_BLUE,
                    fontFamily: "monospace",
                    fontSize: "14px",
                    lineHeight: "1.85",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "14px" : "15px",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedBlock>
      );

    default:
      return null;
  }
}

// ── Related Article Card ──────────────────────────────
function RelatedCard({
  article,
  isMobile,
}: {
  article: (typeof articlesData)[0];
  isMobile: boolean;
}) {
  return (
    <Link
      href={`/artigos/${article.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <motion.div
        whileHover={{ scale: 1.02, borderColor: ACCENT_BLUE }}
        transition={{ duration: 0.2 }}
        style={{
          padding: isMobile ? "18px" : "24px",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "border-color 0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: ACCENT_BLUE,
              letterSpacing: "1px",
            }}
          >
            {article.code}
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "9px",
              color: "rgba(255, 255, 255, 0.3)",
              letterSpacing: "1.5px",
              padding: "2px 8px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
            }}
          >
            {article.tag}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.4)",
            lineHeight: 1.5,
            margin: 0,
            marginTop: "8px",
          }}
        >
          {article.readTime} de leitura
        </p>
      </motion.div>
    </Link>
  );
}

// ── Main Article Page ─────────────────────────────────
export default function ArticlePage() {
  const params = useParams();
  const isMobile = useIsMobile();
  const slug = params.slug as string;

  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <Header />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "rgba(255, 255, 255, 0.35)",
            letterSpacing: "2px",
          }}
        >
          [ERR:404]
        </span>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "24px",
            fontWeight: 300,
            color: "#fff",
          }}
        >
          Artigo não encontrado
        </h1>
        <Link
          href="/artigos"
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#555",
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid #282828",
            borderRadius: "6px",
            transition: "all 0.3s",
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
          ← VOLTAR AOS ARTIGOS
        </Link>
      </div>
    );
  }

  const relatedArticles = articlesData.filter((a) => a.slug !== slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 100]);

  return (
    <div style={{ backgroundColor: "#000", color: "#f5f0e8", minHeight: "100vh" }}>
      <ReadingProgress />
      <Header />

      {/* ── Hero Section ── */}
      <motion.section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "100px 24px 60px" : "120px 48px 80px",
          position: "relative",
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.02,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "760px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Code + Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "12px",
                color: ACCENT_BLUE,
                letterSpacing: "2px",
              }}
            >
              {article.code}
            </span>
            <span
              style={{
                width: "1px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.4)",
                letterSpacing: "2px",
                padding: "4px 10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
              }}
            >
              {article.tag}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile
                ? "clamp(26px, 7vw, 36px)"
                : "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.3,
              color: "#fff",
              margin: 0,
              marginBottom: "40px",
            }}
          >
            {article.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)`,
              marginBottom: "24px",
              transformOrigin: "center",
            }}
          />

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.35)",
                letterSpacing: "1px",
              }}
            >
              {article.readTime} de leitura
            </span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.35)",
                letterSpacing: "1px",
              }}
            >
              {article.date}
            </span>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: isMobile ? "24px" : "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.2)",
                letterSpacing: "2px",
              }}
            >
              ↓
            </span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Content Section ── */}
      <section
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: isMobile ? "40px 24px 80px" : "60px 24px 120px",
        }}
      >
        {/* Description as lead paragraph */}
        <AnimatedBlock>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "17px" : "19px",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "48px",
              fontWeight: 300,
            }}
          >
            {article.description}
          </p>
        </AnimatedBlock>

        {/* Content blocks */}
        {article.content.map((block, index) => (
          <ContentRenderer key={index} block={block} isMobile={isMobile} />
        ))}

        {/* ── End divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
            marginTop: "80px",
            marginBottom: "60px",
            transformOrigin: "center",
          }}
        />

        {/* ── Related Articles ── */}
        <AnimatedBlock>
          <span
            style={{
              display: "block",
              fontFamily: "monospace",
              fontSize: "11px",
              color: "rgba(255, 255, 255, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "24px",
            }}
          >
            [OUTROS ARTIGOS]
          </span>
        </AnimatedBlock>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {relatedArticles.slice(0, 2).map((related) => (
            <AnimatedBlock key={related.code}>
              <RelatedCard article={related} isMobile={isMobile} />
            </AnimatedBlock>
          ))}
        </div>

        {/* ── Back link ── */}
        <AnimatedBlock>
          <Link
            href="/artigos"
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
            ← VOLTAR AOS ARTIGOS
          </Link>
        </AnimatedBlock>
      </section>
    </div>
  );
}
