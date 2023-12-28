import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import Authlinks from "../authLInks/Authlinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href='#'>
          <SiUpwork style={{color:"#098827"}} />
        </Link>
        <Link href='#'>
          <TbBrandFiverr style={{color:"#1bff50"}}/>
        </Link>
        <Link href='#'>
          <CiLinkedin style={{color:"#008ac5"}} />
        </Link>
        <Link href='#'>
          <IoLogoWhatsapp style={{color:"#05d305"}} />
        </Link>
      </div>
      <div className={styles.logo}><Image src="/logo1.png" alt="logo" width={130} height={50} />
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href='/' className={styles.link}>
          Homepage
        </Link>
        <Link href='/' className={styles.link}>
          Contact
        </Link>
        <Link href='/' className={styles.link}>
          About
        </Link>
        <Authlinks/>
      </div>
    </div>
  );
};

export default Navbar;
