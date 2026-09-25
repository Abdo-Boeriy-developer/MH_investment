"use client";

import React from "react";
import style from "./OurServices.module.css";
import Image from "next/image";
import image from "../../../public/assets/ourServicesHome.jpeg";
import {
  AiOutlineCheck,
  AiOutlineHeatMap,
  AiOutlineGateway,
  AiOutlineReconciliation,
} from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { ScrollReveal, ScrollStagger, SpringHover } from "@/components/Animations";

const OurServices = () => {
  return (
    <section className={style.ourServices}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={40} className={style.images}>
          <Image src={image} alt="ourServices" />
        </ScrollReveal>
        <div className={style.content}>
          <ScrollReveal direction="up" distance={25} delay={100}>
            <div className={style.subTitle}>
              <p>من نحن</p>
              <span></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={150}>
            <div className={style.title}>
              <h2>
                شركة متخصصة في المقاولات <br /> وصيانة المباني وتوريد مياة الشرب
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={25} delay={200}>
            <div className={style.desc}>
              <p>
                في MH نؤمن بأن الجودة في أساس النجاح , لذلك نعمل دائما <br /> علي
                تقديم افضل الحلول وخدمات متكاملة تلبي احتياجات عملائنا سواء
                <br /> في مجال المقاولات او صيانةالمباني او توريد مياة الشرب .
              </p>
            </div>
          </ScrollReveal>

          <ScrollStagger stagger={120} distance={25} className={style.cards}>
            <div className={style.card}>
              <SpringHover lift={4}>
                <div className={style.item}>
                  <div className={style.icon}>
                    <AiOutlineCheck />
                  </div>
                  <div className={style.text}>
                    <h2>استخدم أحدث</h2>
                    <h3>التقنيات والمعدات</h3>
                  </div>
                </div>
              </SpringHover>
              <SpringHover lift={4}>
                <div className={style.item}>
                  <div className={style.icon}>
                    <AiOutlineGateway />
                  </div>
                  <div className={style.text}>
                    <h2>الراحه والرضا</h2>
                    <h3> لعملأئنا أولوياتنا</h3>
                  </div>
                </div>
              </SpringHover>
            </div>
            <div className={style.card}>
              <SpringHover lift={4}>
                <div className={style.item}>
                  <div className={style.icon}>
                    <AiOutlineHeatMap />
                  </div>
                  <div className={style.text}>
                    <h2> فريق عمل محترف</h2>
                    <h3> ذو خبرة عالية</h3>
                  </div>
                </div>
              </SpringHover>
              <SpringHover lift={4}>
                <div className={style.item}>
                  <div className={style.icon}>
                    <AiOutlineReconciliation />
                  </div>
                  <div className={style.text}>
                    <h2> ألالتزام بمعأيير</h2>
                    <h3> ألسلامة والجودة</h3>
                  </div>
                </div>
              </SpringHover>
            </div>
          </ScrollStagger>

          <ScrollReveal direction="up" delay={300} distance={20}>
            <div className={style.buttons}>
              <Link href={"/contracting"}>اعرف المزيد</Link>
              <FaArrowLeftLong />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
