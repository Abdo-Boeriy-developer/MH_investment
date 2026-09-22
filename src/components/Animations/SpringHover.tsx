"use client";

import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

type SpringHoverProps = {
  children: React.ReactNode;
  lift?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function SpringHover({
  children,
  lift = 6,
  scale = 1.01,
  className,
  style,
}: SpringHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  const springs = useSpring({
    transform: isHovered
      ? `translate3d(0, -${lift}px, 0) scale(${scale})`
      : "translate3d(0, 0px, 0) scale(1)",
    config: { tension: 320, friction: 20 },
  });

  return (
    <animated.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{
        ...springs,
        ...style,
      }}
    >
      {children}
    </animated.div>
  );
}

