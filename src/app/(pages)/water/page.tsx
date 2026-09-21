import React from "react";
import style from "./water.module.css";
import Image from "next/image";
import hero from "../../../../public/assets/water.jpeg";
import WhyUse from "@/Sections/Water/WhyUse/WhyUse";
import ServicesWater from "@/Sections/Water/Services/ServicesWater";
const page = () => {
  return (
    <>
      <div className={style.water}>
        <div className={style.container}>
          <div className={style.hero}>
            <Image src={hero} alt="img" />
            <div className={style.content}>
              <div className={style.subTitle}>
                <p></p>
                <h2>توريد مياة الشرب</h2>
              </div>
              <h2 className={style.title}>مياة نقية .. ليحاة أفضل</h2>
              <p className={style.desc}>
                نوفر لك مياه شرب أمنة ونقية بجودة عالية. من خلال أحدت وسائل
                النقل والنخزين. وبما يضمن وصولها إليك في الوقت المناسب وبأعلى
                معايبر السلامة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyUse />
      <ServicesWater />
    </>
  );
};

export default page;
