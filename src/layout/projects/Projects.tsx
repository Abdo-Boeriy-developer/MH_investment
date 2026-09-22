"use client";

import React from "react";
import style from "./projects.module.css";
import swiper1 from "../../../public/assets/swiper2.jpeg";
import swiper2 from "../../../public/assets/swiper3.jpeg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { ScrollReveal } from "@/components/Animations";

const Projects = () => {
  return (
    <section className={style.projects}>
      <ScrollReveal direction="up" distance={30}>
        <SectionHeading
          subTitle="اعمالنا"
          title="مشاريعنا في الميدان"
          desc=" نقدر بتنفيذ العديد من المشاريع الناجحة في مجال المقالاوت وصيانة
              المباني وتوريد مياة الشرب
          "
        />
      </ScrollReveal>

      <ScrollReveal direction="up" distance={30} delay={150} className={style.container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            751: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={swiper2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={swiper1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={swiper2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={swiper1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={swiper2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={swiper1} alt="" />
          </SwiperSlide>
        </Swiper>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
