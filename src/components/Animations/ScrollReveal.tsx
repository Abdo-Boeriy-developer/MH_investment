"use client";

import React from "react";
import { animated, useInView } from "react-spring";

export type AnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "zoom";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  distance?: number;
  once?: boolean;
  amount?: number | "any" | "all";
  tension?: number;
  friction?: number;
  className?: string;
  style?: React.CSSProperties;
};

const getInitialTransform = (
  direction: AnimationDirection,
  distance: number,
): string => {
  switch (direction) {
    case "up":
      return `translate3d(0, ${distance}px, 0)`;
    case "down":
      return `translate3d(0, -${distance}px, 0)`;
    case "left":
      return `translate3d(-${distance}px, 0, 0)`;
    case "right":
      return `translate3d(${distance}px, 0, 0)`;
    case "zoom":
      return `translate3d(0, 0, 0) scale(0.92)`;
    case "fade":
    default:
      return `translate3d(0, 0, 0)`;
  }
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  distance = 35,
  once = true,
  amount = 0.12,
  tension = 220,
  friction = 24,
  className,
  style,
}: ScrollRevealProps) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: getInitialTransform(direction, distance),
      },
      to: {
        opacity: 1,
        transform: "translate3d(0, 0px, 0) scale(1)",
      },
      delay,
      config: { tension, friction },
    }),
    {
      once,
      amount,
    },
  );

  return (
    <animated.div
      ref={ref}
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
