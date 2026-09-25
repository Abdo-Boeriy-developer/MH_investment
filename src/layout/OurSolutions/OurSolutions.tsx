"use client";

import React from "react";
import style from "./OurSolutions.module.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiNails } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import swiperImage from "../../../public/assets/swiperHome.jpeg";
import swiperImage2 from "../../../public/assets/swiperHome2.jpeg";
import swiperImage3 from "../../../public/assets/swiperHome3.jpeg";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import {
  ScrollReveal,
  ScrollStagger,
  SpringHover,
} from "@/components/Animations";

const OurSolutions = () => {
  return (
    <section className={style.OurSolutions}>
      <ScrollReveal direction="up" distance={30}>
        <SectionHeading
          subTitle="حلولنا"
          title="  نبني, نحافظ , نوفر"
          desc="ثلاث خدمات أساسية . يجمعها ألاتزام بالجودة والثقة"
        />
      </ScrollReveal>

      <div className={style.container}>
        <ScrollStagger stagger={140} distance={35} className={style.content}>
          <SpringHover lift={6} scale={1.02}>
            <div className={style.card}>
              <div className={style.D_Flex}>
                <div className={style.text_icon}>
                  <HiOutlineHomeModern />
                  <h2>المقاولات</h2>
                </div>
                <div className={style.number}>01</div>
              </div>
              <h3>نبني المستقبل</h3>
              <p>
                تنفيذ اعمال المقاولات والاتشاءات باحترافيه <br />
                مع الاهتمام بكل تفصيلة من البداية وحتي التسليم
              </p>
            </div>
          </SpringHover>

          <SpringHover lift={6} scale={1.02}>
            <div className={style.card}>
              <div className={style.D_Flex}>
                <div className={style.text_icon}>
                  <GiNails />
                  <h2>صيانة المباني</h2>
                </div>
                <div className={style.number}>02</div>
              </div>
              <h3>نبني المستقبل</h3>
              <p>
                صيانة دورية وطارئة لجميع انواع المباني <br />
                والنشأت
              </p>
            </div>
          </SpringHover>

          <SpringHover lift={6} scale={1.02}>
            <div className={style.card}>
              <div className={style.D_Flex}>
                <div className={style.text_icon}>
                  <IoWaterOutline />
                  <h2>المياة</h2>
                </div>
                <div className={style.number}>03</div>
              </div>
              <h3> توريد مياه الشرب</h3>
              <p>
                توريد مياة نقية وأمنة للأستخدمات السكنية <br />
                والتجارية والصناعية
              </p>
            </div>
          </SpringHover>
        </ScrollStagger>

        <ScrollReveal
          direction="up"
          distance={30}
          className={style.swipperImages}
        >
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide className={style.swiperSlide}>
              <Image src={swiperImage} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <Image src={swiperImage2} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <Image src={swiperImage3} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <Image src={swiperImage2} alt="swiperImage" />
            </SwiperSlide>
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurSolutions;
