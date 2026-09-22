import React from "react";
import style from "./contactUs.module.css";
// import Images
import heroContactUsDiskTop from "../../../../public/assets/contactUsDiskTop.jpeg";
import heroContactUsMobile from "../../../../public/assets/contactUsMobile.jpeg";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { FiPhoneMissed } from "react-icons/fi";
import { HiMiniSlash } from "react-icons/hi2";
import Link from "next/link";
import ContactInvormatin from "@/Sections/ContactUs/ContactInvormatin/ContactInvormatin";
import ContactForm from "@/Sections/ContactUs/ContactForm/ContactForm";
import HowcaniHelpYou from "@/Sections/ContactUs/HowcaniHelpYou/HowcaniHelpYou";
import LocationContactUs from "@/Sections/ContactUs/LocationContactUs/LocationContactUs";
import FooterConact from "@/Sections/ContactUs/FooterConact/FooterConact";

const ContactUs = () => {
  return (
    <div className={style.ContactUs}>
      <div className={style.container}>
        <div className={style.overFlow}></div>
        <picture>
          <source
            media="(min-width: 748px)"
            srcSet={heroContactUsDiskTop.src}
          />
          <source media="(max-width: 768px)" srcSet={heroContactUsMobile.src} />
          <Image src="" alt="" />
        </picture>
        <div className={style.content}>
          <h2 className={style.title}>تواصل معنا</h2>
          <p className={style.disc}>
            نحن هنا لمساعدتك. تواصل معنا ودعنا <br />
            نبدا مشروعك
          </p>
          <div className={style.home_contact}>
            <h2>
              <Link href={"/"}>
                {" "}
                الرئيسية
                <IoHome />
              </Link>
            </h2>
            <p>
              <HiMiniSlash />
            </p>
            <h2>
              تواصل معنا <FiPhoneMissed />
            </h2>
          </div>
        </div>
      </div>
      {/*----------------- Contacts Section -------------- */}
      <ContactInvormatin />
      <ContactForm />
      <HowcaniHelpYou />
      <LocationContactUs />
      <FooterConact />
    </div>
  );
};

export default ContactUs;
