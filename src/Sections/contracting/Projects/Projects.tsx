"use client";

import React from "react";
import style from "./Projects.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
import swiper2 from "../../../../public/assets/swiperProject2.jpeg";
import swiper3 from "../../../../public/assets/swiperHome.jpeg";
import swiper4 from "../../../../public/assets/swiperProjects.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import { ScrollReveal } from "@/components/Animations";

const Projects = () => {
  return (
    <div className={style.project}>
      <ScrollReveal direction="up" distance={25} className={style.heading}>
        <SectionHeading
          subTitle="أعمالنا"
          title="مشاريع نفتخر بها"
          desc="مشروعات نفذناها بجودة واحترافية تعكس خبرتنا واهتمامنا بأدق التفاصيل"
        />
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        distance={30}
        delay={150}
        className={style.container}
      >
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
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
          className="mySwiper"
        >
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper2} alt="" />
            <div className={style.text_icon}>
              <h2>هياكل معدنية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper3} alt="" />{" "}
            <div className={style.text_icon}>
              <h2> مشاريع انشائية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper4} alt="" />{" "}
            <div className={style.text_icon}>
              <h2> مباني سكنية وتجارية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper2} alt="" />
            <div className={style.text_icon}>
              <h2>هياكل معدنية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper3} alt="" />{" "}
            <div className={style.text_icon}>
              <h2> مشاريع انشائية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.Swiper}>
            <Image src={swiper4} alt="" />{" "}
            <div className={style.text_icon}>
              <h2> مباني سكنية وتجارية</h2>
              <FaPlus />
            </div>
          </SwiperSlide>
        </Swiper>
      </ScrollReveal>
    </div>
  );
};

export default Projects;
