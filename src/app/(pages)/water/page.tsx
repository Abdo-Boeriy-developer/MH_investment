"use client";

import React from "react";
import style from "./water.module.css";
import Image from "next/image";
import heroWaterDiskTop from "../../../../public/assets/heroWaterDiskTop.jpeg";
import heroWaterMobile from "../../../../public/assets/heroWaterMobile.jpeg";
import WhyUse from "@/Sections/Water/WhyUse/WhyUse";
import { ScrollReveal } from "@/components/Animations";
import ServicesWater from "@/Sections/Water/ServicesWater/ServicesWater";
import WhyworkWater from "@/Sections/Water/WhyworkWater/WhyworkWater";
import ImageToServices from "@/Sections/Water/ImageToServices/ImageToServices";
import FooterWater from "@/Sections/Water/FooterWater/FooterWater";

const page = () => {
  return (
    <>
      <div className={style.water}>
        <div className={style.container}>
          <div className={style.hero}>
            <div className={style.overFlow}></div>
            <picture>
              <source
                media="(min-width: 748px)"
                srcSet={heroWaterDiskTop.src}
              />
              <source media="(max-width: 767px)" srcSet={heroWaterMobile.src} />
              <Image src="" alt="" />
            </picture>
            {/* <Image src={heroWaterDiskTop} alt="img" priority /> */}
            <div className={style.content}>
              <ScrollReveal direction="up" distance={20} delay={100}>
                <div className={style.subTitle}>
                  <p></p>
                  <h2>توريد مياة الشرب</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={25} delay={200}>
                <h2 className={style.title}>مياة نقية .. ليحاة أفضل</h2>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={300}>
                <p className={style.desc}>
                  نوفر لك مياه شرب أمنة ونقية بجودة عالية. من خلال أحدت وسائل
                  النقل والنخزين. وبما يضمن وصولها إليك في الوقت المناسب وبأعلى
                  معايبر السلامة.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <WhyUse />
      <ServicesWater />
      <WhyworkWater />
      <ImageToServices />
      <FooterWater />
    </>
  );
};

export default page;
