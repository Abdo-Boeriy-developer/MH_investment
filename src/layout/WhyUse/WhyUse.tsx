"use client";

import React from "react";
import style from "./WhyUse.module.css";
import image from "../../../public/assets/swiper.jpeg";
import Image from "next/image";
import { MdOutlineSecurity } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { PiUsersFourLight } from "react-icons/pi";
import { ScrollReveal, ScrollStagger, SpringHover } from "@/components/Animations";

const WhyUse = () => {
  return (
    <section className={style.WhyUse}>
      <div className={style.container}>
        <div className={style.content}>
          <ScrollReveal direction="up" distance={25}>
            <div className={style.text}>
              <p className={style.subTitle}>لماذا نحن</p>
              <h2 className={style.title}>نختار الجودة لنصنع الفرق</h2>
              <p className={style.desc}>
                نحن نؤمن ان كل مشروع هو مسؤلية لذلك نحرص علي تقديم خدماتنا <br />
                بأعلي جودة مع الالتزام بالمواعيد وتوفير افضل الحلول لعملائنا
              </p>
            </div>
          </ScrollReveal>

          <div className={style.cardHome}>
            <ScrollStagger stagger={100} distance={20} className={style.cards}>
              <SpringHover lift={5}>
                <div className={style.card}>
                  <div className={style.icon}>
                    <MdOutlineSecurity />
                  </div>
                  <div className={style.cardText}>
                    <h2>جودة عالية</h2>
                    <p>في كل تفاصيل العمل</p>
                  </div>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <div className={style.icon}>
                    <PiUsersFourLight />
                  </div>
                  <div className={style.cardText}>
                    <h2>فريق متخصص</h2>
                    <p>خبرات في كل المجالات</p>
                  </div>
                </div>
              </SpringHover>
            </ScrollStagger>

            <ScrollStagger stagger={100} distance={20} className={style.cards}>
              <SpringHover lift={5}>
                <div className={style.card}>
                  <div className={style.icon}>
                    <IoIosTimer />
                  </div>
                  <div className={style.cardText}>
                    <h2>الالتزام بالمواعيد</h2>
                    <p>تسليم في الوقت المحدد</p>
                  </div>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <div className={style.icon}>
                    <SlEarphonesAlt />
                  </div>
                  <div className={style.cardText}>
                    <h2> دعم مستمر</h2>
                    <p>خدمة عملاء علي مدار الساعة</p>
                  </div>
                </div>
              </SpringHover>
            </ScrollStagger>
          </div>
        </div>

        <ScrollReveal direction="left" distance={35} className={style.images}>
          <Image src={image} alt="image" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyUse;
