import React from "react";
import style from "./ContactInvormatin.module.css";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const ContactInvormatin = () => {
  return (
    <div className={style.ContactInvormatin}>
      <div className={style.container}>
        <div className={style.card_All}>
          <div className={style.card}>
            <div className={style.icon}>
              <MdAccessTime />
            </div>
            <h2 className={style.title}>مواعيد العمل</h2>
            <p className={style.desc}>
              متاحون 24 ساعة <br />
              {/* طوال أيام الأسبوع */}
            </p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <MdOutlineMarkEmailUnread />
            </div>
            <h2 className={style.title}>البريد الألكتروني</h2>
            <p className={style.desc}>info@mh-investment.com</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <FaPhoneAlt />
            </div>
            <h2 className={style.title}>أتصل بنا</h2>
            <p className={style.desc}>+5212512155</p>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <FaLocationDot />
            </div>
            <h2 className={style.title}>العنوان</h2>
            <p className={style.desc}>السعودية - الرياض</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInvormatin;
