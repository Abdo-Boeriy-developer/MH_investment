import React from "react";
import style from "./LocationContactUs.module.css";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
const LocationContactUs = () => {
  return (
    <div className={style.LocationContactUs}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.subTitle}>
            <IoLocationOutline />
            <div>
              <h2>العنوان</h2>
              <p className={style.desc}>
                السعودية - الرياض <br />
                حي الشفا
              </p>
            </div>
          </div>
          <Link
            className={style.link}
            href="https://www.google.com/maps/@24.5742935,46.6964831,436m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: 0 }}
          >
            افتح الموقع علي خرائط جوجل <FaMapLocationDot />
          </Link>
        </div>
        <div className={style.location}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.4254113781494!2d46.70061107536175!3d24.574510578117092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM0JzI4LjIiTiA0NsKwNDInMTEuNSJF!5e0!3m2!1sen!2seg!4v1790070160212!5m2!1sen!2seg"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer"
            title="موقع MH على خرائط جوجل"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationContactUs;
