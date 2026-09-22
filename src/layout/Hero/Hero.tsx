"use client";

import React from "react";
import style from "./hero.module.css";
import heroForDisktop from "../../../public/assets/HomeHero.jpeg";
import heroForMobile from "../../../public/assets/heroBuildMobile.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { animated, useSpring, useTrail } from "react-spring";
import { SpringHover } from "@/components/Animations";

const Hero = () => {
  const heroContentSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 220, friction: 24 },
    delay: 150,
  });

  const cardsData = [
    {
      icon: <FaHandshakeAngle />,
      title: "خبرة وكفاة",
      desc: "في كل التفاصيل",
    },
    {
      icon: <LuAlarmClock />,
      title: "الالتزام بالمواعيد",
      desc: "والدقه في التنفيذ",
    },
    {
      icon: <MdSecurity />,
      title: "جودة عالية",
      desc: "في كل خدمة",
    },
  ];

  const cardsTrail = useTrail(cardsData.length, {
    from: { opacity: 0, transform: "translate3d(0, 25px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 240, friction: 22 },
    delay: 350,
  });

  return (
    <div className={style.hero}>
      {/* <picture>
        <source media="(min-width: 768px)" srcSet={heroForDisktop.src} />
        <source media="(max-width: 767px)" srcSet={heroForMobile.src} />
        <Image src="" alt="" />
      </picture> */}
      <Image
        src={heroForDisktop}
        alt="hero"
        // width={1200} // The native width of your source image file
        // height={800} // The native height of your source image file
        // sizes="(max-width: 768px) 100vw, 1200px"
        fill
        priority
      />
      <div className={style.overlay}></div>
      <div className={style.container}>
        <animated.div className={style.content} style={heroContentSpring}>
          <p className={style.subtital}>
            المقاولات - صيانة مباني - توريد مياة الشرب
          </p>
          <h1>
            شريكك في بناء
            <br /> مستقبل <span>افضل</span>
          </h1>
          <p className={style.description}>
            نقدم حلولًا متكاملة في المقاولات وصيانة المباني
            <br />
            وتوريد مياه الشرب، مع الالتزام بالجودة والدقة
            <br />
            وتنفيذ الأعمال وفق أعلى المعايير.
          </p>
          <div className={style.button}>
            <Link className={style.primaryButton} href={"/contracting"}>
              تواصل معنا
              <FaArrowLeftLong className={style.arrowLeft} />
            </Link>
          </div>
        </animated.div>
        <div className={style.features}>
          {cardsTrail.map((springStyle, index) => (
            <animated.div key={index} style={springStyle}>
              <SpringHover lift={8}>
                <div className={style.card}>
                  <div className={style.icon}>{cardsData[index].icon}</div>
                  <div className={style.text}>
                    <h2>{cardsData[index].title}</h2>
                    <p>{cardsData[index].desc}</p>
                  </div>
                </div>
              </SpringHover>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
