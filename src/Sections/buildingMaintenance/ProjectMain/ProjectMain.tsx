"use client";
import React from "react";
import style from "./ProjectMain.module.css";
// import img1 from "../../../../public/assets/cr4.jpeg";
// import img2 from "../../../../public/assets/cr2.jpeg";
// import img3 from "../../../../public/assets/cr2.jpeg";
import Image from "next/image";
import swiper2 from "../../../../public/assets/cr2.jpeg";
import swiper3 from "../../../../public/assets/cr3.jpeg";
import swiper4 from "../../../../public/assets/cr4.jpeg";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// import icons
import { TfiTimer } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { LuWrench } from "react-icons/lu";
import { GrLike } from "react-icons/gr";
const ProjectMain = () => {
  return (
    <div className={style.ProjectMain}>
      <div className={style.container}>
        <div className={style.topText}>
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
        </div>
        <div className={style.swipers}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay, Pagination]}
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
        </div>

        <div className={style.numbers}>
          <div className={style.card}>
            <TfiTimer />
            <h2>+1</h2>
            <p>سنوات خبرة</p>
          </div>
          <div className={style.card}>
            <BsBuildings />
            <h2>+10</h2>
            <p>مشروع مكتمل</p>
          </div>
          <div className={style.card}>
            <LuWrench />
            <h2>+150</h2>
            <p>عملية صيانة</p>
          </div>
          <div className={style.card}>
            <GrLike />
            <h2>+200</h2>
            <p>عميل سعيد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
