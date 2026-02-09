"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Text reveal animation component
export function RevealText({
  children,
  trigger,
  delay = 0,
  initialVisible = true,
}: {
  children: React.ReactNode;
  trigger: boolean;
  delay?: number;
  initialVisible?: boolean;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (trigger && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [trigger, hasAnimated]);

  if (initialVisible && !hasAnimated) {
    return <span>{children}</span>;
  }

  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: trigger ? 1 : 0 }}
        transition={{ duration: 0.01, delay: trigger ? delay + 0.15 : 0 }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: trigger ? [0, 1, 1, 0] : 0,
        }}
        transition={{
          duration: 0.4,
          delay: trigger ? delay : 0,
          times: [0, 0.4, 0.4, 1],
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          transformOrigin: "left",
        }}
      />
    </span>
  );
}

// Flip animation for text
export function FlipText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (text !== displayText) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setDisplayText(text);
        setIsFlipping(false);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [text, displayText]);

  return (
    <motion.span
      animate={{
        opacity: isFlipping ? 0 : 1,
        y: isFlipping ? -8 : 0
      }}
      transition={{ duration: 0.15 }}
      style={{
        display: "block",
        fontFamily: "monospace",
        fontSize: "13px",
        fontWeight: 500,
        color: "#e5e5e5",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}
    >
      {displayText}
    </motion.span>
  );
}

// Line reveal animation
export function LineReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: triggered ? 1 : 0 }}
        transition={{ duration: 0.01, delay: triggered ? 0.2 : 0 }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: triggered ? [0, 1, 1, 0] : 0 }}
        transition={{
          duration: 0.5,
          times: [0, 0.4, 0.4, 1],
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          transformOrigin: "left",
        }}
      />
    </span>
  );
}

// Blink reveal animation
export function BlinkReveal({
  children,
  delay = 0,
  color = "#fff",
}: {
  children: React.ReactNode;
  delay?: number;
  color?: string;
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), delay);
    const timer2 = setTimeout(() => setPhase(2), delay + 100);
    const timer3 = setTimeout(() => setPhase(3), delay + 200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [delay]);

  return (
    <motion.span
      animate={{
        opacity: phase === 0 ? 0 : phase === 1 ? 1 : phase === 2 ? 0.3 : 1,
        color: phase === 1 ? "#0066FF" : color,
      }}
      transition={{ duration: 0.08 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}

// Triggered reveal text
export function TriggeredRevealText({
  children,
  active,
  delay = 0,
}: {
  children: React.ReactNode;
  active: boolean;
  delay?: number;
}) {
  const [triggered, setTriggered] = useState(false);
  const lastActiveRef = useRef(active);

  useEffect(() => {
    if (active && !lastActiveRef.current) {
      const timer = setTimeout(() => setTriggered(true), delay);
      lastActiveRef.current = true;
      return () => clearTimeout(timer);
    }
    if (!active && lastActiveRef.current) {
      setTriggered(false);
      lastActiveRef.current = false;
    }
  }, [active, delay]);

  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: triggered ? 1 : 0 }}
        transition={{ duration: 0.01, delay: triggered ? 0.2 : 0 }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: triggered ? [0, 1, 1, 0] : 0 }}
        transition={{
          duration: 0.5,
          times: [0, 0.4, 0.4, 1],
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          transformOrigin: "left",
        }}
      />
    </span>
  );
}
