import style from "./hero.module.css";
import hero from "../../../public/assets/HomeHero.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
const Hero = () => {
  return (
    <div className={style.hero}>
      <Image src={hero} alt="hero" fill priority />
      <div className={style.overlay}></div>
      <div className={style.container}>
        <div className={style.content}>
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
            <Link className={style.primaryButton} href={"/"}>
              تواصل معنا
              <FaArrowLeftLong className={style.arrowLeft} />
            </Link>
          </div>
        </div>
        <div className={style.features}>
          <div className={style.card}>
            <div className={style.icon}>
              <FaHandshakeAngle />
            </div>
            <div className={style.text}>
              <h2>خبرة وكفاة</h2>
              <p>في كل التفاصيل</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <LuAlarmClock />
            </div>
            <div className={style.text}>
              <h2>الالتزام بالمواعيد </h2>
              <p> والدقه في التنفيذ</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.icon}>
              <MdSecurity />
            </div>
            <div className={style.text}>
              <h2>جودة عالية </h2>
              <p> في كل خدمة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
