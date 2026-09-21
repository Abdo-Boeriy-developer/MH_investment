import React from "react";
import style from "./building.module.css";
import Image from "next/image";
// import images
import heroBuild from "../../../../public/assets/heroBuild.jpeg";
import ServicesBuild from "@/Sections/buildingMaintenance/Services/ServicesBuild";
import WhyChooseUs from "@/Sections/buildingMaintenance/WhyChooseUs/WhyChooseUs";
import ProjectMain from "@/Sections/buildingMaintenance/ProjectMain/ProjectMain";
import HowWework from "@/Sections/buildingMaintenance/HowWework/HowWework";
import ReadyToServe from "@/Sections/buildingMaintenance/ReadyToServe/readyToServe";
const page = () => {
  return (
    <div className={style.building}>
      <div className={style.container}>
        <div className={style.HeroBuild}>
          <Image src={heroBuild} alt="" />
          <div className={style.content}>
            <div className={style.top}>
              <p></p>
              <h2>صيانة مباني</h2>
              <p></p>
            </div>
            <h2 className={style.title}>
              نحافظ علي مبانيك <br />
              <span>في أفضل حال</span>
            </h2>
            <p className={style.desc}>
              خدمات صيانة المباني المتكاملة تشمل أعمال الصيانة الدورية
              والوقائية، إصلاح الأعطال، وصيانة الأنظمة والمرافق للحفاظ على كفاءة
              المباني وجودتها واستدامتها.
            </p>
            <button>اطلب خدمة الأن +</button>
          </div>
        </div>
      </div>
      <ServicesBuild />
      <WhyChooseUs />
      <HowWework />
      <ProjectMain />
      <ReadyToServe />
    </div>
  );
};

export default page;
