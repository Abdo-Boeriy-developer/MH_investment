"use client";

import React from "react";
import { animated, useSpring, useInView } from "react-spring";

type ScrollStaggerProps = {
  children: React.ReactNode;
  stagger?: number;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
};

function StaggerItem({
  children,
  inView,
  delay,
  distance,
  className,
  style,
}: {
  children: React.ReactNode;
  inView: boolean;
  delay: number;
  distance: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate3d(0, 0px, 0)"
      : `translate3d(0, ${distance}px, 0)`,
    delay,
    config: { tension: 230, friction: 24 },
  });

  return (
    <animated.div className={className} style={{ ...springs, ...style }}>
      {children}
    </animated.div>
  );
}

export default function ScrollStagger({
  children,
  stagger = 120,
  distance = 30,
  className,
  style,
  itemClassName,
  itemStyle,
}: ScrollStaggerProps) {
  const [ref, inView] = useInView({
    once: true,
    amount: 0.1,
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref} className={className} style={style}>
      {childrenArray.map((child, index) => (
        <StaggerItem
          key={index}
          inView={inView}
          delay={index * stagger}
          distance={distance}
          className={itemClassName}
          style={itemStyle}
        >
          {child}
        </StaggerItem>
      ))}
    </div>
  );
}

