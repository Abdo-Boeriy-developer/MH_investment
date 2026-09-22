"use client";

import React from "react";
import style from "./HowWework.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoMdCheckboxOutline } from "react-icons/io";
import {
  ScrollReveal,
  ScrollStagger,
  SpringHover,
} from "@/components/Animations";

const HowWework = () => {
  return (
    <div className={style.HowWework}>
      <ScrollReveal direction="up" distance={30}>
        <SectionHeading
          subTitle="كيف نعمل ؟"
          title="خطواط بسيطة لراحة تدوم"
          desc="نعتمد علي عملية منظمة لضمان تنفيذ الخدمة بجودة عالية وفي الوقت المحدد"
        />
      </ScrollReveal>

      <ScrollStagger stagger={140} distance={30}>
        <div className={style.container}>
          <SpringHover className={style.card} lift={6} scale={1.02}>
            <div className={style.icon}>
              <FiPhoneCall />
              <h3>01</h3>
            </div>
            <h2>تواصل معنا</h2>
            <p>واخبرنا بطلبك</p>
          </SpringHover>

          <SpringHover className={style.card} lift={6} scale={1.02}>
            <div className={style.icon}>
              <MdOutlineContentPasteSearch />
              <h3>02</h3>
            </div>
            <h2>معاينة وتقييم </h2>
            <p>للموقع وتحديد الاحتياجات</p>
          </SpringHover>

          <SpringHover className={style.card} lift={6} scale={1.02}>
            <div className={style.icon}>
              <HiOutlineWrenchScrewdriver />
              <h3>03</h3>
            </div>
            <h2> تنفيذ الخدمة </h2>
            <p>باعلي معايير الجودة </p>
          </SpringHover>

          <SpringHover className={style.card} lift={6} scale={1.02}>
            <div className={style.icon}>
              <IoMdCheckboxOutline />
              <h3>04</h3>
            </div>
            <h2> متابعة وضمان </h2>
            <p> لراحة بالك</p>
          </SpringHover>
        </div>
      </ScrollStagger>
    </div>
  );
};

export default HowWework;
