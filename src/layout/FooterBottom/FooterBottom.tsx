"use client";
import React from "react";
import style from "./FooterBottom.module.css";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { headerLInk } from "../headerLink";
import { usePathname } from "next/navigation";
const FooterBottom = () => {
  const pathName = usePathname();
  return (
    <div className={style.FooterBottom}>
      <div className={style.container}>
        <div className={style.linkName}>
          <ul>
            {headerLInk.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={pathName === item.path ? style.active : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className={style.subTitle}>جميع الحقوق محفوظة &copy; 2026 MH</h2>

        <div className={style.socialMedia}>
          <ul>
            <li>
              <Link href={""}>
                <RiFacebookFill />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <SiTiktok />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
