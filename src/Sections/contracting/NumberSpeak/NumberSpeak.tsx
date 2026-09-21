import React from "react";
import style from "./NumberSpeak.module.css";
import { FaHelmetSafety } from "react-icons/fa6";
import { LuClockArrowUp } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
const NumberSpeak = () => {
  return (
    <div className={style.numberSpeak}>
      <div className={style.container}>
        <div className={style.content}>
          <h2>ارقاما تتحدث عن نفسها</h2>
          <p>
            خبرات متراكمة وإنجازات ملموسة تعكس جودة أعمالنا وثقة عملائنا، ونواصل
            تحقيق المزيد من النجاحات عامًا بعد عام
          </p>
        </div>
        <div className={style.stateItem}>
          <div className={style.item}>
            <FaHelmetSafety />
            <h2>+15</h2>
            <p>فريق متخصص</p>
          </div>
          <div className={style.item}>
            <LuClockArrowUp />
            <h2>+10</h2>
            <p>سنوات خبرة </p>
          </div>
          <div className={style.item}>
            <PiUsersThree />
            <h2>+40</h2>
            <p> عميل راضي</p>
          </div>
          <div className={style.item}>
            <FaBuilding />
            <h2>+20</h2>
            <p> مشروع منفذ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSpeak;
