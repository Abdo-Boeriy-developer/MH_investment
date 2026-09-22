"use client";

import React from "react";
import style from "./NumberSpeak.module.css";
import { FaHelmetSafety } from "react-icons/fa6";
import { LuClockArrowUp } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import {
  ScrollReveal,
  ScrollStagger,
  AnimatedCounter,
  SpringHover,
} from "@/components/Animations";

const NumberSpeak = () => {
  return (
    <div className={style.numberSpeak}>
      <div className={style.container}>
        <ScrollReveal direction="up" distance={25} className={style.content}>
          <h2>ارقاما تتحدث عن نفسها</h2>
          <p>
            خبرات متراكمة وإنجازات ملموسة تعكس جودة أعمالنا وثقة عملائنا، ونواصل
            تحقيق المزيد من النجاحات عامًا بعد عام
          </p>
        </ScrollReveal>

        <ScrollStagger stagger={120} distance={25} className={style.stateItem}>
          <SpringHover lift={6}>
            <div className={style.item}>
              <FaHelmetSafety />
              <h2>
                <AnimatedCounter value={15} prefix="+" />
              </h2>
              <p>فريق متخصص</p>
            </div>
          </SpringHover>

          <SpringHover lift={6}>
            <div className={style.item}>
              <LuClockArrowUp />
              <h2>
                <AnimatedCounter value={10} prefix="+" />
              </h2>
              <p>سنوات خبرة </p>
            </div>
          </SpringHover>

          <SpringHover lift={6}>
            <div className={style.item}>
              <PiUsersThree />
              <h2>
                <AnimatedCounter value={40} prefix="+" />
              </h2>
              <p> عميل راضي</p>
            </div>
          </SpringHover>

          <SpringHover lift={6}>
            <div className={style.item}>
              <FaBuilding />
              <h2>
                <AnimatedCounter value={20} prefix="+" />
              </h2>
              <p> مشروع منفذ</p>
            </div>
          </SpringHover>
        </ScrollStagger>
      </div>
    </div>
  );
};

export default NumberSpeak;
