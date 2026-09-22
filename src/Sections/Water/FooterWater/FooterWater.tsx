import React from "react";
import style from "./FooterWater.module.css";
import Image from "next/image";
import footerDiskTop from "../../../../public/assets/footerWater.jpeg";
import footerMobile from "../../../../public/assets/footerWaterMobilejpeg.jpeg";
import logo from "../../../../public/assets/logo-removebg-preview.png";

import { LuPhoneCall } from "react-icons/lu";
import { ScrollReveal } from "@/components/Animations";
const FooterWater = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <picture className={style.picture}>
          <source media="(min-width: 748px)" srcSet={footerDiskTop.src} />
          <source media="(max-width: 767px)" srcSet={footerMobile.src} />
          <Image src="" alt="footer" />
        </picture>
        <div className={style.logo}>
          <Image src={logo} alt="" />
        </div>

        <ScrollReveal direction="right" distance={30} className={style.content}>
          <div className={style.card}>
            <h2 className={style.title}>مياة نقية .. أمان لك ولعائلتك</h2>
            <p className={style.desc}>
              تواصل معنا الأن لمعرفة المزيد أو طلب خدمة
            </p>
            <button>
              أتصل بنا
              <LuPhoneCall />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FooterWater;
