"use client";

import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import footer from "../../../public/assets/foooter.jpeg";
import footerMobile from "../../../public/assets/footerMobile.jpeg";
import { ScrollReveal, SpringHover } from "@/components/Animations";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={30} className={style.images}>
          <picture>
            <source media="(min-width:768px) " srcSet={footer.src} />
            <source media="(max-width:767px) " srcSet={footerMobile.src} />
            <Image src={""} alt="footer" />
          </picture>
        </ScrollReveal>
        <div className={style.content}>
          <ScrollReveal direction="right" distance={30} className={style.text}>
            <div className={style.subTitle}>
              <p></p>
              <h2>أبدأ مشروعك معانا</h2>
              <p></p>
            </div>

            <h2 className={style.title}>
              شريكك في بناء <br />
              مستقبل أفضل
            </h2>
            <p className={style.desc}>
              تواصل معانا الأن للحصول علي استشارة مجانية <br />
              وتعرف علي أفضل الحلول لمشروعك
            </p>
            <SpringHover lift={4} scale={1.04}>
              <button>تواصل معانا</button>
            </SpringHover>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Footer;
