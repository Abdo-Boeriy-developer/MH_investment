import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import footer from "../../../public/assets/foooter.jpeg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.images}>
          <Image src={footer} alt="footer" />
        </div>
        <div className={style.content}>
          <div className={style.text}>
            <p className={style.subTitle}>أبدأ مشروعك معانا</p>
            <h2 className={style.title}>
              شريكك في بناء <br />
              مستقبل أفضل
            </h2>
            <p className={style.desc}>
              تواصل معانا الأن للحصول علي استشارة مجانية <br />
              وتعرف علي أفضل الحلول لمشروعك
            </p>
            <button>تواصل معانا</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
