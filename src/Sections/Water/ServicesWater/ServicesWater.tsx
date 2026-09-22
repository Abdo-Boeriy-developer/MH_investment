import React from "react";
import style from "./servicesWater.module.css";
// import images
import water from "../../../../public/assets/waterSwiper.jpeg";
import Image from "next/image";
// import icons
import { IoCheckmarkSharp } from "react-icons/io5";
import { ScrollReveal, SpringHover } from "@/components/Animations";
const ServicesWater = () => {
  return (
    <div className={style.serviceWater}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={30} className={style.content}>
          <div>
            <div className={style.topText}>
              <p></p>
              <h2>خدماتنا</h2>
              <p></p>
            </div>
            <h2 className={style.title}>من المصدر ألي باب بيتك</h2>
            <p className={style.desc}>
              نقوم بتوريد مياة الشرب من مصادر موثوقة ومعتمدة ونستخدم أحدث أنظمة
              النقل والتخزين للحفاظ علي جودتها من المصدر حتي وصولها أليك
            </p>
            <ul>
              <li>
                <IoCheckmarkSharp />
                <p>توريد مياة الشرب للمنازل والفلل</p>
              </li>
              <li>
                <IoCheckmarkSharp />
                <p>توريد للمشاريع والكمبوندات</p>
              </li>
              <li>
                <IoCheckmarkSharp />
                <p>توفير كميات كبيرة للشركات والمصانع</p>
              </li>
              <li>
                <IoCheckmarkSharp />
                <p>تعاقدات دورية ومرنة حسب احتياجك</p>
              </li>
            </ul>
          </div>
        </ScrollReveal>
        <SpringHover className={style.images} lift={6} scale={1.02}>
          <div>
            <div className={style.backRight}></div>
            <Image src={water} alt="Water" />
          </div>
        </SpringHover>
      </div>
    </div>
  );
};

export default ServicesWater;
