import React from "react";
import style from "./ServicesBuild.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
// import images
import electriacl from "../../../../public/assets/electrical.jpeg";
import plumbing from "../../../../public/assets/plumbing.jpeg";
import airConditioning from "../../../../public/assets/Air.jpeg";
import elevators from "../../../../public/assets/elevators.jpeg";
import painting from "../../../../public/assets/painting.jpeg";
import general from "../../../../public/assets/general.jpeg";
// import react icons
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaFaucetDrip } from "react-icons/fa6";
import { PiElevator } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuPaintRoller } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
const ServicesBuild = () => {
  return (
    <div className={style.ServicesBuild}>
      <SectionHeading
        subTitle="خدماتنا"
        title="كل ما تحتاجة لمبني أكثر كفاءة"
        desc="نقدم مجموعة متكاملة من خدمات الصيانة لضمان عمل جميع الانظمة بكفاءة وأمان"
      />
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={electriacl} alt="" />
            <MdOutlineElectricBolt />
          </div>
          <h2>الكهرباء</h2>
          <p>فحص وصيانة الانظمة الكهربائية بأمان</p>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={plumbing} alt="" />
            <FaFaucetDrip />
          </div>
          <h2>السباكة</h2>
          <p>حلول سريعة وادوات متطورة</p>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={airConditioning} alt="" />
            <PiElevator />
          </div>
          <h2>التكييف</h2>
          <p>كفاءة اعلي وراحة افضل</p>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={painting} alt="" />
            <LuPaintRoller />
          </div>
          <h2>الدهانات والتشطيبات</h2>
          <p>تجديد المظهر وحماية الاسطح</p>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={general} alt="" />
            <TbAirConditioning />
          </div>
          <h2>الصيانة العامة والوقائية</h2>
          <p>للحفاظ علي كفاءة المباني ومنع الاعطال</p>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={elevators} alt="" />
            <HiOutlineWrenchScrewdriver />
          </div>
          <h2>المصاعد</h2>
          <p> وصيانة دورية وفحص شامل للمصاعد</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBuild;
