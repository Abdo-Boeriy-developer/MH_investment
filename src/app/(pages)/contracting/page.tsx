"use client";

import React from "react";
import style from "./contracting.module.css";
import Image from "next/image";
// import images
import imgDiskTop from "../../../../public/assets/conHero2.jpeg";
// import HeroConMobile from "../../../../public/assets/HeroConMobile.jpeg";
import HeroConMobile from "../../../../public/assets/heroConMobile2.jpeg";
import Services from "@/Sections/contracting/services/services";
import AboutUs from "@/Sections/contracting/AboutUs/AboutUs";
import Projects from "@/Sections/contracting/Projects/Projects";
import NumberSpeak from "@/Sections/contracting/NumberSpeak/NumberSpeak";
import { ScrollReveal, SpringHover } from "@/components/Animations";

const page = () => {
  return (
    <>
      <div className={style.contracting}>
        <div className={style.container}>
          <div className={style.iamges}>
            <picture>
              <source media="(min-width:748px)" srcSet={imgDiskTop.src} />
              <source media="(max-width:768px)" srcSet={HeroConMobile.src} />
              <Image src={""} alt="IMagess" />
            </picture>
            <div className={style.overFlow}></div>
            <div className={style.content}>
              <ScrollReveal direction="up" distance={20} delay={100}>
                <p className={style.subTitle}>المقاولأت</p>
              </ScrollReveal>
              <ScrollReveal direction="up" distance={25} delay={200}>
                <h2 className={style.title}>
                  نبني اليوم <br />
                  مستقبل <span>أفضل</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" distance={20} delay={300}>
                <p className={style.desc}>
                  نحوّل رؤيتك إلى واقع بتنفيذ متقن وجودة تدوم، ونبني معك أساسًا
                  قويًا لمستقبل أفضل.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" distance={20} delay={400}>
                <SpringHover lift={4} scale={1.04}>
                  <button>تواصل معنا </button>
                </SpringHover>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <AboutUs />
      <Projects />
      <NumberSpeak />
    </>
  );
};

export default page;
