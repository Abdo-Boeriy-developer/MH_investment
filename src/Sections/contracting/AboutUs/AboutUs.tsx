"use client";

import React from "react";
import style from "./aboutUs.module.css";
import imgAbout from "../../../../public/assets/aboutUs.jpeg";
import Image from "next/image";
import {
  LuClock3,
  LuSettings,
  LuUsersRound,
  LuCoins,
  LuShieldCheck,
  LuEye,
} from "react-icons/lu";
import { ScrollReveal, ScrollStagger, SpringHover } from "@/components/Animations";

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div className={style.container}>
        <ScrollReveal direction="left" distance={35} className={style.images}>
          <Image src={imgAbout} alt="Image" />
        </ScrollReveal>

        <div className={style.content}>
          <ScrollReveal direction="up" distance={25} className={style.topText}>
            <p className={style.subTitle}>نحن</p>
            <h2 className={style.title}>خبرة .. ألتزام .. جودة</h2>
            <p className={style.desc}>
              نقدم خدمات مقاولات متكاملة بجودة عالية، مع الالتزام بالدقة في
              التنفيذ والمواعيد، لنحوّل رؤيتك إلى واقع بأعلى معايير الاحتراف
            </p>
          </ScrollReveal>

          <div className={style.fetoure}>
            <ScrollStagger stagger={100} distance={20} className={style.cards}>
              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuClock3 />
                  <h2>
                    التزام صارم <br />
                    بالمواعيد
                  </h2>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuSettings />
                  <h2>
                    استخدام احدث <br />
                    التقنيات والمعدات
                  </h2>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuUsersRound />
                  <h2>
                    فريق عمل متخصص <br />
                    وخبرات عالية
                  </h2>
                </div>
              </SpringHover>
            </ScrollStagger>

            <ScrollStagger stagger={100} distance={20} className={style.cards}>
              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuCoins />
                  <h2>
                    اسعار تنافسية <br />
                    وقيمة حقيقية
                  </h2>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuShieldCheck />
                  <h2>
                    معايير جودة <br />
                    عالمية
                  </h2>
                </div>
              </SpringHover>

              <SpringHover lift={5}>
                <div className={style.card}>
                  <LuEye />
                  <h2>
                    متابعة مستمرة لجميع <br />
                    مراحل التنفيذ
                  </h2>
                </div>
              </SpringHover>
            </ScrollStagger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
