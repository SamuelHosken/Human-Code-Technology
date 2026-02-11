"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LiquidGlassFilter } from "../ui/LiquidGlassFilter";

const NAV_LINKS = [
  { href: "#quem-somos", label: "ABOUT" },
  { href: "#servicos", label: "SERVICES" },
  { href: "/artigos", label: "ARTICLES" },
  { href: "#contato", label: "CONTACT" },
];

// Hamburger icon that animates to X
function MenuIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "44px",
        height: "44px",
        padding: 0,
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "relative",
        zIndex: 3,
      }}
    >
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -4,
        }}
        transition={{ duration: 0.2 }}
        style={{
          display: "block",
          width: "20px",
          height: "2px",
          backgroundColor: "#fff",
          position: "absolute",
        }}
      />
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          display: "block",
          width: "20px",
          height: "2px",
          backgroundColor: "#fff",
          position: "absolute",
        }}
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
        style={{
          display: "block",
          width: "20px",
          height: "2px",
          backgroundColor: "#fff",
          position: "absolute",
        }}
      />
    </button>
  );
}

// Mobile menu overlay
function MobileMenu({
  isOpen,
  onClose,
  onNavClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
}) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Background grid pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.03,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Menu links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavClick(link.href);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "16px 32px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                  letterSpacing: "2px",
                  borderRadius: "8px",
                  minWidth: "200px",
                  textAlign: "center",
                  border: "1px solid transparent",
                  transition: "border-color 0.2s, color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.3)",
                letterSpacing: "1px",
              }}
            >
              HUMAN CODE TECHNOLOGY
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }
    const id = href.replace("#", "");
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        if (isScrolled) {
          setShowLinks(false);
          setTimeout(() => setShowLinks(true), 300);
        }
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen]);

  const borderRadius = scrolled ? "14px" : "16px";

  return (
    <>
      <LiquidGlassFilter />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavClick={handleNavClick} />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: isMobile ? "12px 16px" : "16px 24px",
          pointerEvents: "none",
        }}
      >
        <motion.nav
          layout
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? "16px" : "32px",
            padding: isMobile
              ? "8px 16px"
              : scrolled
              ? "10px 24px"
              : "14px 24px",
            width: isMobile
              ? "calc(100% - 32px)"
              : scrolled
              ? "auto"
              : "calc(100% - 48px)",
            maxWidth: isMobile ? "none" : scrolled ? "none" : "1252px",
            borderRadius,
            pointerEvents: "auto",
            overflow: "hidden",
            boxShadow:
              "0 6px 12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Liquid Glass Effect Layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backdropFilter: isMobile ? "blur(16px)" : "blur(12px)",
              WebkitBackdropFilter: isMobile ? "blur(16px)" : "blur(12px)",
              filter: isMobile ? "none" : "url(#glass-distortion)",
              overflow: "hidden",
              borderRadius,
            }}
          />

          {/* Tint Layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "rgba(0, 0, 0, 0.55)",
              borderRadius,
            }}
          />

          {/* Shine Layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              overflow: "hidden",
              borderRadius,
              boxShadow:
                "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.12), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          />

          {/* Logo */}
          <motion.a
            layout="position"
            href="/"
            style={{
              position: "relative",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              height: "22px",
            }}
          >
            {isMobile ? (
              // Mobile: always show icon
              <motion.img
                src="/logo-icon.svg"
                alt="HCT"
                style={{
                  height: "22px",
                  width: "auto",
                }}
              />
            ) : (
              // Desktop: animate between full logo and icon
              <>
                <motion.img
                  src="/logo.svg"
                  alt="Human Code Technology"
                  animate={{
                    opacity: scrolled ? 0 : 1,
                    filter: scrolled ? "blur(8px)" : "blur(0px)",
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    height: "22px",
                    width: "auto",
                    position: scrolled ? "absolute" : "relative",
                  }}
                />
                <motion.img
                  src="/logo-icon.svg"
                  alt="HCT"
                  animate={{
                    opacity: scrolled ? 1 : 0,
                    filter: scrolled ? "blur(0px)" : "blur(8px)",
                  }}
                  transition={{ duration: 0.25, delay: scrolled ? 0.1 : 0 }}
                  style={{
                    height: "22px",
                    width: "auto",
                    position: scrolled ? "relative" : "absolute",
                  }}
                />
              </>
            )}
          </motion.a>

          {/* Desktop: Nav links | Mobile: Hamburger */}
          {isMobile ? (
            <MenuIcon isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <motion.div
              layout="position"
              style={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  animate={{
                    opacity: showLinks ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: showLinks ? index * 0.03 : 0,
                  }}
                  whileHover={{ color: "#fff" }}
                  style={{
                    padding: "6px 12px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.nav>
      </header>
    </>
  );
}
