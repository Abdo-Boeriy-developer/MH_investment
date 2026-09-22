"use client";

import React from "react";
import style from "./WhyChooseUs.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCreative } from "swiper/modules";
import electriacl from "../../../../public/assets/electrical.jpeg";
import plumbing from "../../../../public/assets/plumbing.jpeg";
import airConditioning from "../../../../public/assets/Air.jpeg";
import elevators from "../../../../public/assets/elevators.jpeg";
import painting from "../../../../public/assets/painting.jpeg";
import general from "../../../../public/assets/general.jpeg";
import airs from "../../../../public/assets/Air..jpeg";
import { ScrollReveal } from "@/components/Animations";

const WhyChooseUs = () => {
  return (
    <div className={style.WhyChooseUs}>
      <div className={style.container}>
        <ScrollReveal direction="up" distance={30} className={style.content}>
          <div className={style.SubTitle}>
            <p></p>
            <h2>لماذا نحن ؟</h2>
            <p></p>
          </div>
          <h2 className={style.title}>اختيارك الافضل لصيانة المباني</h2>
          <p className={style.desc}>
            نحن نؤمن أن الصيانة ليست مجرد إصلاح الأعطال بل هي استثمار في راحة
            وسلامة المباني لذلك نلتزم باعلي معايير الجودة والاحترافية في كل
            خدمةً نقدمها
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" distance={35} delay={150} className={style.images}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide className={style.swiper}>
              <Image src={electriacl} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={plumbing} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={airConditioning} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={elevators} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={painting} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={general} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={airs} alt="" />
            </SwiperSlide>
          </Swiper>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WhyChooseUs;
