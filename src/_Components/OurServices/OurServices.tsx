import React from "react";
import style from "./OurServices.module.css";
import Image from "next/image";
import image from "../../../public/assets/ourServices-removebg-preview (1).png";
// import icons from react icons
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineHeatMap } from "react-icons/ai";
import { AiOutlineGateway } from "react-icons/ai";
import { AiOutlineReconciliation } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
const OurServices = () => {
  return (
    <section className={style.ourServices}>
      <div className={style.container}>
        <div className={style.images}>
          <Image src={image} alt="ourServices" />
        </div>
        <div className={style.content}>
          <div className={style.subTitle}>
            <p>من نحن</p>
            <span></span>
          </div>
          <div className={style.title}>
            <h2>
              شركة متخصصة في المقاولات <br /> وصيانة المباني وتوريد مياة الشرب
            </h2>
          </div>
          <div className={style.desc}>
            <p>
              في MH نؤمن بأن الجودة في أساس النجاح , لذلك نعمل دائما <br /> علي
              تقديم افضل الحلول وخدمات متكاملة تلبي احتياجات عملائنا سواء
              <br /> في مجال المقاولات او صيانةالمباني او توريد مياة الشرب .
            </p>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <div className={style.item}>
                <div className={style.icon}>
                  <AiOutlineCheck />
                </div>
                <div className={style.text}>
                  <h2>استخدم أحدث</h2>
                  <h3>التقنيات والمعدات</h3>
                </div>
              </div>
              <div className={style.item}>
                <div className={style.icon}>
                  <AiOutlineGateway />
                </div>
                <div className={style.text}>
                  <h2>الراحه والرضا</h2>
                  <h3> لعملأئنا أولوياتنا</h3>
                </div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.item}>
                <div className={style.icon}>
                  <AiOutlineHeatMap />
                </div>
                <div className={style.text}>
                  <h2> فريق عمل محترف</h2>
                  <h3> ذو خبرة عالية</h3>
                </div>
              </div>
              <div className={style.item}>
                <div className={style.icon}>
                  <AiOutlineReconciliation />
                </div>
                <div className={style.text}>
                  <h2> ألالتزام بمعأيير</h2>
                  <h3> ألسلامة والجودة</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={style.buttons}>
            <Link href={""}>اعرف المزيد</Link>
            <FaArrowLeftLong />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
