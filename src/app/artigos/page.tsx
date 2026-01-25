"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ArtigosPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#f5f0e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", maxWidth: "500px" }}
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
            marginBottom: "24px",
          }}
        >
          [SYS:ARTICLES]
        </span>

        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: "24px",
          }}
        >
          Em <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>breve</span>
        </h1>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#888",
            marginBottom: "40px",
          }}
        >
          Estamos preparando conteúdos sobre automação, inteligência artificial e transformação digital para empresas.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#888",
            textDecoration: "none",
            padding: "12px 24px",
            border: "1px solid #333",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#fff";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#333";
            e.currentTarget.style.color = "#888";
          }}
        >
          ← VOLTAR
        </Link>
      </motion.div>
    </div>
  );
}
