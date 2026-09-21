import React from "react";
import style from "./WhyUse.module.css";
import image from "../../../public/assets/swiper.jpeg";
import Image from "next/image";
import { MdOutlineSecurity } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { PiUsersFourLight } from "react-icons/pi";
const WhyUse = () => {
  return (
    <section className={style.WhyUse}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.text}>
            <p className={style.subTitle}>لماذا نحن</p>
            <h2 className={style.title}>نختار الجودة لنصنع الفرق</h2>
            <p className={style.desc}>
              نحن نؤمن ان كل مشروع هو مسؤلية لذلك نحرص علي تقديم خدماتنا <br />
              بأعلي جودة مع الالتزام بالمواعيد وتوفير افضل الحلول لعملائنا
            </p>
          </div>
          <div className={style.cardHome}>
            {/* <div className={style.top}></div> */}
            <div className={style.cards}>
              <div className={style.card}>
                <div className={style.icon}>
                  <MdOutlineSecurity />
                </div>
                <div className={style.cardText}>
                  <h2>جودة عالية</h2>
                  <p>في كل تفاصيل العمل</p>
                </div>
              </div>
              {/* <div className={style.right}></div> */}
              <div className={style.card}>
                <div className={style.icon}>
                  <PiUsersFourLight />
                </div>
                <div className={style.cardText}>
                  <h2>فريق متخصص</h2>
                  <p>خبرات في كل المجالات</p>
                </div>
              </div>
            </div>
            <div className={style.cards}>
              <div className={style.card}>
                <div className={style.icon}>
                  <IoIosTimer />
                </div>
                <div className={style.cardText}>
                  <h2>الالتزام بالمواعيد</h2>
                  <p>تسليم في الوقت المحدد</p>
                </div>
              </div>
              {/* <div className={style.left}></div> */}
              <div className={style.card}>
                <div className={style.icon}>
                  <SlEarphonesAlt />
                </div>
                <div className={style.cardText}>
                  <h2> دعم مستمر</h2>
                  <p>خدمة عملاء علي مدار الساعة</p>
                </div>
              </div>
              {/* <div className={style.bottom}></div> */}
            </div>
          </div>
        </div>
        <div className={style.images}>
          <Image src={image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default WhyUse;
