"use client";

import React from "react";
import { animated, useSpring, useInView } from "react-spring";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    once: true,
    amount: 0.2,
  });

  const { count } = useSpring({
    from: { count: 0 },
    to: { count: inView ? value : 0 },
    config: { mass: 1, tension: 70, friction: 20 },
  });

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {prefix}
      <animated.span>
        {count.to((n) => Math.floor(n).toLocaleString())}
      </animated.span>
      {suffix}
    </span>
  );
}

