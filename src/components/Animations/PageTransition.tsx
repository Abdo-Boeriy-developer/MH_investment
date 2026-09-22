"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animated, useSpring } from "react-spring";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 260, friction: 26, duration: 800 },
  }));

  useEffect(() => {
    // Smoothly spring in when pathname changes
    api.start({
      from: { opacity: 0, transform: "translate3d(0, 200px, 0)" },
      to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      reset: true,
    });
    // Ensure viewport returns to top on route navigation
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname, api]);

  return (
    <animated.div
      key={pathname}
      style={{
        ...springs,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto",
      }}
    >
      {children}
    </animated.div>
  );
}
