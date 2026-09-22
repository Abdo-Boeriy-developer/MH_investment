"use client";

import React from "react";
import style from "./readytoserve.module.css";
import Image from "next/image";
import ready from "../../../../public/assets/foooter.jpeg";
import { ScrollReveal, SpringHover } from "@/components/Animations";

const ReadyToServe = () => {
  return (
    <div className={style.readyToServe}>
      <div className={style.container}>
        <ScrollReveal direction="up" distance={20} className={style.image}>
          <div className={style.overFlow}></div>
          <Image src={ready} alt="" />
          <div className={style.content}>
            <div className={style.topText}>
              <p></p>
              <h2>جاهزون لخدمتك</h2>
              <p></p>
            </div>
            <h2 className={style.title}>دعنا نحافظ علي مبناك في افضل حال</h2>
            <p className={style.desc}>
              تواصل معنا الأن للحصول علي استشارة مجانية او طلب خدمة صيانة
            </p>
            <SpringHover lift={4} scale={1.04}>
              <button>اطلب خدمة الأن +</button>
            </SpringHover>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ReadyToServe;
