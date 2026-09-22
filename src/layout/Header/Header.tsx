"use client";

import React, { useState } from "react";
import style from "./header.module.css";
import Link from "next/link";
import { headerLInk } from "../headerLink";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import logo from "../../../public/assets/logo-removebg-preview.png";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { animated, useSpring } from "react-spring";
import { SpringHover } from "@/components/Animations";

const Header = () => {
  const pathName = usePathname();
  const [openMenu, setIsOpenMenu] = useState(false);

  const headerSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 220, friction: 22 },
  });

  return (
    <>
      <animated.div className={style.header} style={headerSpring}>
        <div className={style.container}>
          <div className={style.button}>
            <SpringHover lift={3} scale={1.03}>
              <button type="button">
                اتصل بنا
                <MdOutlinePhone />
              </button>
            </SpringHover>
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
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>
        </div>
      </animated.div>
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
              <Link href={"/contracting"}>
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
