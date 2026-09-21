"use client";
import React from "react";
import style from "./OurSolutions.module.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiNails } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
// import images
import swiperImage from "../../../public/assets/swiper.jpeg";
import swiperImage2 from "../../../public/assets/swiper2.jpeg";
import swiperImage3 from "../../../public/assets/swiper3.jpeg";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
const OurSolutions = () => {
  return (
    <section className={style.OurSolutions}>
      <SectionHeading
        subTitle="حلولنا"
        title="  نبني, نحافظ , نوفر"
        desc="ثلاث خدمات أساسية . يجمعها ألاتزام بالجودة والثقة"
      />
      <div className={style.container}>
        <div className={style.content}>
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
          <div className={style.card}>
            <div className={style.D_Flex}>
              <div className={style.text_icon}>
                <IoWaterOutline />
                <h2>المقاولات</h2>
              </div>
              <div className={style.number}>03</div>
            </div>
            <h3> توريد مياه الشرب</h3>
            <p>
              توريد مياة نقية وأمنة للأستخدمات السكنية <br />
              والتجارية والصناعية
            </p>
          </div>
        </div>
        <div className={style.swipperImages}>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <Image src={swiperImage} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={swiperImage2} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={swiperImage3} alt="swiperImage" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={swiperImage} alt="swiperImage" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
