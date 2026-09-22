"use client";
import React from "react";
import style from "./ImageToServices.module.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
//
import water1 from "../../../../public/assets/waterSwiper.jpeg";
import water2 from "../../../../public/assets/waterSwiper2.jpeg";
import water3 from "../../../../public/assets/waterSwiper3.jpeg";
import { ScrollReveal } from "@/components/Animations";
const ImageToServices = () => {
  return (
    <div className={style.ImageToServices}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={30} className={style.content}>
          <div className={style.subTitle}>
            <p></p>
            <h2> صور الخدمة</h2>
            <p></p>
          </div>
          <h2 className={style.title}>جودة يمكنك رؤيتها</h2>
          <p className={style.desc}>
            نحن نؤمن أن الجودة لا تقال فقط. بل تري في كل تفصيلة من خدماتنا .
          </p>
        </ScrollReveal>

        <div className={style.imagesSwiper}>
          {" "}
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
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className={style.swiper}>
              <Image src={water1} alt="water" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={water2} alt="water" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={water3} alt="water" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={water1} alt="water" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={water2} alt="water" />
            </SwiperSlide>
            <SwiperSlide className={style.swiper}>
              <Image src={water3} alt="water" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageToServices;
