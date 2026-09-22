"use client";

import React from "react";
import style from "./WhyUse.module.css";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbShieldCheck } from "react-icons/tb";
import { PiCarProfile } from "react-icons/pi";
import { LuAlarmClockCheck } from "react-icons/lu";
import {
  ScrollReveal,
  ScrollStagger,
  SpringHover,
} from "@/components/Animations";

const WhyUse = () => {
  return (
    <div className={style.WhyUse}>
      <div className={style.container}>
        <ScrollStagger
          stagger={120}
          distance={25}
          className={style.icons}
          itemClassName={style.card}
        >
          <SpringHover lift={6} className={style.verticalCenter}>
            <div className={style.icon}>
              <MdOutlineWaterDrop />
            </div>
            <h2>مياة نقية وامنة</h2>
            <p>مطابقة للمواصفات الصحية المعتمدة</p>
          </SpringHover>

          <SpringHover lift={6} className={style.verticalCenter}>
            <div className={style.icon}>
              <TbShieldCheck />
            </div>
            <h2>مياة نقية وامنة</h2>
            <p>مطابقة للمواصفات الصحية المعتمدة</p>
          </SpringHover>

          <SpringHover lift={6} className={style.verticalCenter}>
            <div className={style.icon}>
              <PiCarProfile />
            </div>
            <h2>أعلي معايير الجودة</h2>
            <p>من خلال الفحص المستمر والتحليل الدوري</p>
          </SpringHover>

          <SpringHover lift={6} className={style.verticalCenter}>
            <div className={style.icon}>
              <LuAlarmClockCheck />
            </div>
            <h2>متوفر دائما</h2>
            <p>خدمة عملاء علي مدار الساعة</p>
          </SpringHover>
        </ScrollStagger>

        <ScrollReveal direction="left" distance={30} className={style.content}>
          <div className={style.subTitle}>
            <p></p>
            <h2>لماذا نحن</h2>
            <p></p>
          </div>
          <h2 className={style.title}>جودة نضمنها لك </h2>
          <p className={style.desc}>
            حرص على تقديم مياه الشرب بأعلى درجات النقاء والجودة. مع الالتزام
            التام بالمواصفات الصحية والمعايبر المعتمدة. لنكون دائمًا على ثقتك.
          </p>
          <SpringHover lift={4} scale={1.04}>
            <button className={style.button}>تواصل معنا</button>
          </SpringHover>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WhyUse;
