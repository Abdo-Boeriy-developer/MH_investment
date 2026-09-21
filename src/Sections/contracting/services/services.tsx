import React from "react";
import style from "./services.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
// import images
import img1 from "../../../../public/assets/cr1.jpeg";
import img2 from "../../../../public/assets/cr2.jpeg";
import img3 from "../../../../public/assets/cr7.jpeg";
import img4 from "../../../../public/assets/cr5.jpeg";
import img5 from "../../../../public/assets/c8.jpeg";
// import icons
import {
  FaBuilding,
  FaPersonDigging,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
const Services = () => {
  return (
    <div className={style.Services}>
      <div>
        <SectionHeading
          subTitle={"خدماتنا"}
          title={"مقاولات متكامله لكل مشروع"}
          desc={
            "نقدم حلولا متكاملة في مجال المقاولات من اعمال الئج تلبي احتياجات عملائنا وتفوق توقعاتهمبناء والتشطيبات الي تنفيذ المشاريع بأعلي معايير الجودة والدقة لضمان نتاج "
          }
        />
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={img1} alt="card" />
            <FaPersonDigging />
          </div>
          <div className={style.content}>
            <h2>أعمال الحفر والتسويق </h2>
            <p>تنفيذ أعمال الحفر والتسوية بدقة عالية</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={img4} alt="card" />
            <FaPersonDigging />
          </div>
          <div className={style.content}>
            <h2>الأنشاءات الخرسانية</h2>
            <p>تنفيذ الهيكل الخرساني بأعلي معايير الجودة</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={img3} alt="card" />
            <FaScrewdriverWrench />
          </div>
          <div className={style.content}>
            <h2>أعمال البناء والتشطيب</h2>
            <p>جميع اعمال البناء والتشطيب بفريق متخصص</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={img2} alt="card" />
            <FaBuilding />
          </div>
          <div className={style.content}>
            <h2>الهيكل المعدني</h2>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={img5} alt="card" />
            <FaClipboardCheck />
          </div>
          <div className={style.content}>
            <h2>أدارة المشروعات </h2>
            <p>أشراف كامل من البداية حتي التسليم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
