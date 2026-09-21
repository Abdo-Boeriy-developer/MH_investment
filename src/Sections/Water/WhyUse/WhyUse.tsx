import React from "react";
import style from "./WhyUse.module.css";
// import react icons
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbShieldCheck } from "react-icons/tb";
import { PiCarProfile } from "react-icons/pi";
import { LuAlarmClockCheck } from "react-icons/lu";
const WhyUse = () => {
  return (
    <div className={style.WhyUse}>
      <div className={style.container}>
        <div className={style.icons}>
          <div className={style.card}>
            <div className={style.icon}>
              <MdOutlineWaterDrop />
            </div>
            <h2>مياة نقية وامنة</h2>
            <p>مطابقة للمواصفات الصحية المعتمدة</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <TbShieldCheck />
            </div>
            <h2>مياة نقية وامنة</h2>
            <p>مطابقة للمواصفات الصحية المعتمدة</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <PiCarProfile />
            </div>
            <h2>أعلي معايير الجودة</h2>
            <p>من خلال الفحص المستمر والتحليل الدوري</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <LuAlarmClockCheck />
            </div>
            <h2>متوفر دائما</h2>
            <p>خدمة عملاء علي مدار الساعة</p>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.subTitle}>
            <p></p>
            <h2>لماذا نحن</h2>
            <p></p>
          </div>
          <h2 className={style.title}>جودة نضمنها لك </h2>
          <p className={style.desc}>
            حرص على تقديم مياه الشرب بأعلى درجات النقاء والجودة. مع الالتزام
            التام بالمواصفات الصحية والمعايبر المعتمدة. لنكون دائمًا على ثقتك.
          </p>
          <button className={style.button}>تواصل معنا</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
