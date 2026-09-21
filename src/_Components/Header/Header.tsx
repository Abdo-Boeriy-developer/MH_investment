"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import Link from "next/link";
import { headerLInk } from "../headerLink";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import logoHeader from "../../../public/assets/headerlogo.jpeg";
import logo from "../../../public/assets/logo-removebg-preview.png";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  // const [active, setActive] = useState("");
  const [openMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.button}>
            <button type="button">
              اتصل بنا
              <MdOutlinePhone />
            </button>
            <div className={style.menu} onClick={() => setIsOpenMenu(true)}>
              <IoMdMenu />
            </div>
          </div>
          <div className={style.links}>
            <ul>
              {headerLInk?.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={pathName === item.path ? style.active : ""}
                      onClick={() => setIsOpenMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.logo}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${style.headerMobile} ${openMenu ? style.actives : ""}`}
        >
          <div className={style.containerMobile}>
            <div className={style.logo_close}>
              <div className={style.close} onClick={() => setIsOpenMenu(false)}>
                <IoCloseCircleOutline />
              </div>
              <div className={style.logoMobile}>
                <Image src={logo} alt="logo" />
              </div>
            </div>
            <div className={style.linksMobile}>
              <ul>
                {headerLInk.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={pathName === item.path ? style.active : ""}
                      onClick={() => setIsOpenMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.MobileButton}>
              <Link href={""}>
                اتصل بنا
                <MdOutlinePhone />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
