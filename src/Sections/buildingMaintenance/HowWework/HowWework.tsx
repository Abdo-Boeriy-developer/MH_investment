import React from "react";
import style from "./HowWework.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const HowWework = () => {
  return (
    <div className={style.HowWework}>
      <SectionHeading
        subTitle="كيف نعمل ؟"
        title="خطواط بسيطة لراحة تدوم"
        desc="نعتمد علي عملية منظمة لضمان تنفيذ الخدمة بجودة عالية وفي الوقت المحدد"
      />
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.icon}>
            <FiPhoneCall />
            <h3>01</h3>
          </div>
          <h2>تواصل معنا</h2>
          <p>واخبرنا بطلبك</p>
        </div>
        {/* <IoIosArrowForward className={style.arrow} /> */}
        <div className={style.card}>
          <div className={style.icon}>
            <MdOutlineContentPasteSearch />
            <h3>02</h3>
          </div>
          <h2>معاينة وتقييم </h2>
          <p>للموقع وتحديد الاحتياجات</p>
        </div>
        {/* <IoIosArrowForward className={style.arrow} /> */}

        <div className={style.card}>
          <div className={style.icon}>
            <HiOutlineWrenchScrewdriver />
            <h3>03</h3>
          </div>
          <h2> تنفيذ الخدمة </h2>
          <p>باعلي معايير الجودة </p>
        </div>
        {/* <IoIosArrowForward className={style.arrow} /> */}

        <div className={style.card}>
          <div className={style.icon}>
            <IoMdCheckboxOutline />
            <h3>04</h3>
          </div>
          <h2> متابعة وضمان </h2>
          <p> لراحة بالك</p>
        </div>
      </div>
    </div>
  );
};

export default HowWework;
