import React from "react";
import style from "./readytoserve.module.css";
import Image from "next/image";
import ready from "../../../../public/assets/foooter.jpeg";
const readyToServe = () => {
  return (
    <div className={style.readyToServe}>
      <div className={style.overFlow}></div>
      <div className={style.container}>
        <div className={style.image}>
          <Image src={ready} alt="" />
          <div className={style.content}>
            <div className={style.topText}>
              <p></p>
              <h2>جاهزون لخدمتك</h2>
              <p></p>
            </div>
            <h2 className={style.title}>دعنا نحافظ علي مبناك في افضل حال</h2>
            <p className={style.desc}>
              تواصل معنا الأن للحصول علي استشارة مجانية او طلب خدمة صيانة
            </p>
            <button>اطلب خدمة الأن +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default readyToServe;
