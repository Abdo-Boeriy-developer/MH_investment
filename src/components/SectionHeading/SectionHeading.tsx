import React from "react";
import style from "./SectionHeading.module.css";
type SectionHeadingProps = {
  subTitle: string;
  title: string;
  desc: string;
};
const SectionHeading = ({ subTitle, title, desc }: SectionHeadingProps) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.subTitle}>
          <p></p>
          <h2>{subTitle}</h2>
          <p></p>
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.desc}> {desc}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
