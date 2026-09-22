"use client";

import React from "react";
import style from "./ProjectMain.module.css";
import Image from "next/image";
import swiper2 from "../../../../public/assets/cr2.jpeg";
import swiper3 from "../../../../public/assets/cr3.jpeg";
import swiper4 from "../../../../public/assets/cr4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { TfiTimer } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { LuWrench } from "react-icons/lu";
import { GrLike } from "react-icons/gr";
import {
  ScrollReveal,
  ScrollStagger,
  AnimatedCounter,
  SpringHover,
} from "@/components/Animations";

const ProjectMain = () => {
  return (
    <div className={style.ProjectMain}>
      <div className={style.container}>
        <ScrollReveal direction="up" distance={25} className={style.topText}>
          <div className={style.SubTitle}>
            <p></p>
            <h2> اعمالنا</h2>
            <p></p>
          </div>
          <h2 className={style.title}>مشاريع نفتخر بها</h2>
          <p className={style.desc}>
            بعض من المشاريع اللتي نفذناها لعملأئنا في مختلف القطاعات السكنية
            والتجارية
          </p>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          distance={30}
          delay={150}
          className={style.swipers}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay, Pagination, FreeMode]}
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
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper2} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper4} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper2} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper4} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper3} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <div className={style.img}>
                <Image src={swiper2} alt="" />
              </div>
              <h2>مختلف القطاعات السكنية والتجارية</h2>
              <p>التجارية</p>
            </SwiperSlide>
          </Swiper>
        </ScrollReveal>

        <ScrollStagger stagger={100} distance={25} className={style.numbers}>
          <SpringHover className={style.card} lift={6}>
            <TfiTimer />
            <h2>
              <AnimatedCounter value={1} prefix="+" />
            </h2>
            <p>سنوات خبرة</p>
          </SpringHover>

          <SpringHover className={style.card} lift={6}>
            <BsBuildings />
            <h2>
              <AnimatedCounter value={10} prefix="+" />
            </h2>
            <p>مشروع مكتمل</p>
          </SpringHover>

          <SpringHover className={style.card} lift={6}>
            <LuWrench />
            <h2>
              <AnimatedCounter value={150} prefix="+" />
            </h2>
            <p>عملية صيانة</p>
          </SpringHover>

          <SpringHover className={style.card} lift={6}>
            <GrLike />
            <h2>
              <AnimatedCounter value={200} prefix="+" />
            </h2>
            <p>عميل سعيد</p>
          </SpringHover>
        </ScrollStagger>
      </div>
    </div>
  );
};

export default ProjectMain;
