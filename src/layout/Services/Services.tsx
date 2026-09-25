"use client";

import React from "react";
import style from "./Services.module.css";
import Image from "next/image";
import card2 from "../../../public/assets/ServicesHomeOne.jpeg";
import card1 from "../../../public/assets/ServicesHomeTwo.jpeg";
import card4 from "../../../public/assets/waterContactUs.jpeg";
import { IoWaterOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { SlWrench } from "react-icons/sl";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import {
  ScrollReveal,
  ScrollStagger,
  SpringHover,
} from "@/components/Animations";

const Services = () => {
  return (
    <section className={style.services}>
      <ScrollReveal direction="up" distance={30}>
        <SectionHeading
          subTitle="خدماتنا"
          title="حلول متكامله للبناء والتطوير"
          desc={`  نقدم مجموعة شاملة من الخدمات اللتي تلبي احتياجاتك في مجال المقاولأت
             وصيانة المباني وتوريد مياه الشرب باعلي معايير الجودة`}
        />
      </ScrollReveal>

      <ScrollStagger stagger={150} distance={35}>
        <div className={style.container}>
          <SpringHover lift={8} scale={1.02} className={style.card}>
            <div>
              <div className={style.image}>
                <Image src={card2} alt="image" />
                <IoHomeOutline />
              </div>
              <h2>المقاولأت</h2>
            </div>
          </SpringHover>

          <SpringHover lift={8} scale={1.02} className={style.card}>
            <div>
              <div className={style.image}>
                <Image src={card1} alt="image" />
                <SlWrench />
              </div>
              <h2>صيانة المباني</h2>
            </div>
          </SpringHover>

          <SpringHover lift={8} scale={1.02} style={{}} className={style.card}>
            <div className={""}>
              <div className={style.image}>
                <Image src={card4} alt="image" />
                <IoWaterOutline />
              </div>
              <h2>توريد مياة الشرب </h2>
            </div>
          </SpringHover>
        </div>
      </ScrollStagger>
    </section>
  );
};

export default Services;
