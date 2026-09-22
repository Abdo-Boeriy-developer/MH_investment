import React from "react";
import style from "./HowcaniHelpYou.module.css";
import Link from "next/link";
// -----------import images --------
import buildContactUs from "../../../../public/assets/buildContactUs.jpeg";
import contractingContactUs from "../../../../public/assets/contractingContactUs.jpeg";
import waterContactUs from "../../../../public/assets/waterContactUs.jpeg";
// -----------import icons-------------
import { FaArrowLeftLong, FaScrewdriverWrench } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { MdOutlineWaterDrop } from "react-icons/md";
// ------------import img with next ----------------
import Image from "next/image";

const HowcaniHelpYou = () => {
  return (
    <div className={style.HowcaniHelpYou}>
      <div className={style.heading}>
        <h2 className={style.title}>كيف يمكنني مساعدتك ؟</h2>
        <p></p>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={buildContactUs} alt="buildContactUs" />
            <div className={style.icon}>
              <HiHome />
            </div>
          </div>
          <div className={style.content}>
            <h2>المقاولات</h2>
            <p>تنفيذ مشاريع باحترافية وجودة عالية وفي الوقت المحدد</p>
            <span></span>
            <button>
              <Link href={"/contracting"}>
                اعرف المزيد
                <FaArrowLeftLong />
              </Link>
            </button>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={contractingContactUs} alt="buildContactUs" />
            <div className={style.icon}>
              <FaScrewdriverWrench />
            </div>
          </div>
          <div className={style.content}>
            <h2>صيانة المباني</h2>
            <p>صيانة شاملة للمباني للحفاظ علي جودتها وكفاءتها</p>
            <button>
              <Link href={"/buildingmaintenance"}>
                اعرف المزيد
                <FaArrowLeftLong />
              </Link>
            </button>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <Image src={waterContactUs} alt="buildContactUs" />
            <div className={style.icon}>
              <MdOutlineWaterDrop />
            </div>
          </div>
          <div className={style.content}>
            <h2>توريد مياة الشرب</h2>
            <p>حلول موثوقة لتوريد مياة بأعلي معايير الجودة</p>
            <button>
              <Link href={"/water"}>
                اعرف المزيد
                <FaArrowLeftLong />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowcaniHelpYou;
