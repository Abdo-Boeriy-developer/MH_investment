import React from "react";
import style from "./FooterConact.module.css";
import Image from "next/image";
import footer from "../../../../public/assets/footerContactUs.jpeg";
import { FiSend } from "react-icons/fi";
const FooterConact = () => {
  return (
    <div className={style.FooterConact}>
      <div className={style.container}>
        <div className={style.overFlow}></div>
        <Image src={footer} alt="imgFooter" />
        <div className={style.content}>
          <h2 className={style.title}>لديك مشروع؟ نحن جاهزون لتنفيذه</h2>
          <p className={style.desc}>تواصل معنا اليوم ودعنا ننقاش احتياجاتك</p>
          <button>
            تواصل معنا
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterConact;
