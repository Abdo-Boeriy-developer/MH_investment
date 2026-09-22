import React from "react";
import style from "./WhyworkWater.module.css";
//
import { FiPhone } from "react-icons/fi";
import { TbBottle } from "react-icons/tb";
import { LuCar } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { ScrollReveal, SpringHover } from "@/components/Animations";
const WhyworkWater = () => {
  return (
    <div className={style.WhyworkWater}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={30}>
          <div className={style.topText}>
            <div className={style.subTitle}>
              <p></p>
              <h2>كيف نعمل</h2>
              <p></p>
            </div>
            <h2 className={style.title}>خطوات بسيطة.. لمياهك</h2>
          </div>
        </ScrollReveal>
        <div className={style.cards}>
          <SpringHover lift={6} className={style.card}>
            {/* <div className={style.card}> */}
            <div className={style.icon}>
              <FiPhone />
            </div>
            <p className={style.number}>01</p>
            <h3 className={style.titleCard}>تواصل معنا</h3>
            <p className={style.descCard}>
              اختر الكمية المناسبة <br /> وتواصل مع فريقنا
            </p>
            {/* </div> */}
          </SpringHover>

          <SpringHover lift={6} className={style.card}>
            <div className={style.icon}>
              <TbBottle />
            </div>
            <p className={style.number}>02</p>
            <h3 className={style.titleCard}>تجهيز المياة</h3>
            <p className={style.descCard}>
              من مصادر معتمدة
              <br /> وفحص دقيق للجودة
            </p>
          </SpringHover>

          <SpringHover lift={6} className={style.card}>
            <div className={style.icon}>
              <LuCar />
            </div>
            <p className={style.number}>03</p>
            <h3 className={style.titleCard}>النقل والتوصيل</h3>
            <p className={style.descCard}>
              بواسطة اسطولنا المجهز
              <br /> وفي الوقت المحدد
            </p>
          </SpringHover>

          <SpringHover lift={6} className={style.card}>
            <div className={style.icon}>
              <LuShieldCheck />
            </div>
            <p className={style.number}>04</p>
            <h3 className={style.titleCard}>استلامك للمياة</h3>
            <p className={style.descCard}>بجودة عالية وكا أمان</p>
          </SpringHover>
        </div>
      </div>
    </div>
  );
};

export default WhyworkWater;
