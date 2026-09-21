import React from "react";
import style from "./contracting.module.css";
import Image from "next/image";
// import images
import img from "../../../../public/assets/conHero.jpeg";
import Services from "@/Sections/contracting/services/services";
import AboutUs from "@/Sections/contracting/AboutUs/AboutUs";
import Projects from "@/Sections/contracting/Projects/Projects";
import NumberSpeak from "@/Sections/contracting/NumberSpeak/NumberSpeak";

const page = () => {
  return (
    <>
      <div className={style.contracting}>
        <div className={style.container}>
          <div className={style.iamges}>
            <Image src={img} alt="IMagess" />
            <div className={style.content}>
              <p className={style.subTitle}>المقاولأت</p>
              <h2 className={style.title}>
                نبني اليوم <br />
                مستقبل <span>أفضل</span>
              </h2>
              <p className={style.desc}>
                نحوّل رؤيتك إلى واقع بتنفيذ متقن وجودة تدوم، ونبني معك أساسًا
                قويًا لمستقبل أفضل.
              </p>
              <button>تواصل معنا </button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <AboutUs />
      <Projects />
      <NumberSpeak />
    </>
  );
};

export default page;
