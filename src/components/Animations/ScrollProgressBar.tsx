"use client";

import React from "react";
import { animated, useScroll } from "react-spring";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9999,
        pointerEvents: "none",
        background: "linear-gradient(90deg, #d9aa5a 0%, #e1b45d 50%, #f0d48f 100%)",
        boxShadow: "0 0 8px rgba(225, 180, 93, 0.6)",
        transformOrigin: "100% 50%", // expands from right to left in RTL
        transform: scrollYProgress.to((p) => `scaleX(${p})`),
      }}
    />
  );
}

